import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { withFirebase } from "../FirebaseContext";
import { initialStateUserInfo } from "./initialState";
import { getOrderAndActions, getInitialStateOrder } from "../../state/Order";
import { isStoreOpen } from "./utils";

const CartContainer = ({ cartAndActions, firebase }) => {
  const orderAndSet = useState(
    getLocalStorageItem("order", { ...getInitialStateOrder() }),
  );
  const [userInfo, setUserInfo] = useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );
  const [currentDate, setCurrentDate] = useState(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [deliveryNoticeOpen, setDeliveryNoticeOpen] = useState(false);

  const orderAndActions = getOrderAndActions({
    orderAndSet,
    cartAndActions,
    currentDate,
    userInfo,
    firebase,
  });

  const makeOrder = async () => {
    if (isStoreOpen(currentDate)) {
      setDeliveryNoticeOpen(true);
    } else {
      setScheduleOpen(true);
    }
  };

  const setCurrentDateAsync = async () => {
    setCurrentDate(await firebase.getCurrentDate());
  };

  useEffect(() => {
    // Listen for Order on Firebase
    const unsubscribeToListener = firebase.onDocument(
      "orders",
      orderAndActions.order.idempotencyToken,
      {
        onSnapshot: orderAndActions.onFirebaseChange,
      },
    );
    setCurrentDateAsync();

    return () => unsubscribeToListener();
  }, []);

  function updateUserInfo(userInfo) {
    setUserInfo(userInfo);
    setLocalStorageItem("userInfo", userInfo);
  }

  return (
    <Cart
      userInfo={userInfo}
      makeOrder={makeOrder}
      scheduleOpen={scheduleOpen}
      updateUserInfo={updateUserInfo}
      cartAndActions={cartAndActions}
      orderAndActions={orderAndActions}
      deliveryNoticeOpen={deliveryNoticeOpen}
    />
  );
};

export default withFirebase(CartContainer);
