import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { withFirebase } from "../FirebaseContext";
import { initialStateUserInfo, getInitialStateOrder } from "./initialState";
import { utcDate } from "../../services/formatter/formatter";
import { isStoreOpen } from "./utils";

const CartContainer = ({ cartAndActions, setVariantIds, firebase }) => {
  const [userInfo, setUserInfo] = useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );

  const [order, setOrder] = useState(
    getLocalStorageItem("order", { ...getInitialStateOrder() }),
  );
  const [currentDate, setCurrentDate] = useState(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [deliveryNoticeOpen, setDeliveryNoticeOpen] = useState(false);

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
      order.idempotencyToken,
      {
        onSnapshot: processOrderEditedOnFirebase,
      },
    );
    setCurrentDateAsync();

    return () => unsubscribeToListener();
  }, []);

  function processOrderEditedOnFirebase(orderOnFirebase) {
    // If there's Order in Firebase, override local
    if (orderOnFirebase) {
      updateOrder(orderOnFirebase);
    }
  }

  function updateUserInfo(userInfo) {
    setUserInfo(userInfo);
    setLocalStorageItem("userInfo", userInfo);
  }

  function updateOrder(order) {
    setOrder(order);
    setLocalStorageItem("order", order);
  }

  async function requestOrder() {
    const number = `${utcDate(currentDate, true, false)}-${parseInt(
      Math.random() * 10000,
    ) + 1000}`;

    updateOrder({ ...order, status: "pending" });

    setTimeout(() => {
      firebase.set({
        path: "orders",
        document: order.idempotencyToken,
        data: {
          ...order,
          number,
          userInfo,
          status: "requested",
          cart: cartAndActions.cart,
        },
      });
    }, 3000);

    firebase.setAnalyticsEvent("back-to-menu");
  }

  function placeNewOrder() {
    cartAndActions.clear();
    updateOrder(getInitialStateOrder());

    firebase.setAnalyticsEvent("back-to-menu");
  }

  function rateOrder(rating) {
    firebase.set({
      path: "orders",
      document: order.idempotencyToken,
      data: {
        ...order,
        rating,
      },
    });
  }

  function commentOrder(comments) {
    firebase.set({
      path: "orders",
      document: order.idempotencyToken,
      data: {
        ...order,
        comments,
      },
    });
  }

  return (
    <Cart
      order={order}
      userInfo={userInfo}
      rateOrder={rateOrder}
      makeOrder={makeOrder}
      scheduleOpen={scheduleOpen}
      commentOrder={commentOrder}
      requestOrder={requestOrder}
      setVariantIds={setVariantIds}
      placeNewOrder={placeNewOrder}
      updateUserInfo={updateUserInfo}
      cartAndActions={cartAndActions}
      deliveryNoticeOpen={deliveryNoticeOpen}
    />
  );
};

export default withFirebase(CartContainer);
