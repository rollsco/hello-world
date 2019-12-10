import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";
import { withFirebase } from "../FirebaseContext";
import { initialStateUserInfo, getInitialStateOrder } from "./initialState";
import { utcDate } from "../../services/formatter";
import { isStoreOpen } from "./utils";

const CartContainer = ({
  cart,
  firebase,
  closeCart,
  clearCart,
  removeFromCart,
}) => {
  const [userInfo, setUserInfo] = useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );

  const [order, setOrder] = useState(
    getLocalStorageItem("order", { ...getInitialStateOrder() }),
  );

  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [deliveryNoticeOpen, setDeliveryNoticeOpen] = useState(false);

  const getCurrentDate = async () => {
    return await firebase.getCurrentDate();
  };

  const makeOrder = async () => {
    if (isStoreOpen(await getCurrentDate())) {
      setDeliveryNoticeOpen(true);
    } else {
      setScheduleOpen(true);
    }
  };

  // onMount
  useEffect(() => {
    // listen for Order on Firebase
    const unsubscribeToListener = firebase.onDocument(
      "orders",
      order.idempotencyToken,
      {
        onSnapshot: processOrderEditedOnFirebase,
      },
    );

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
    const number = `${utcDate(await getCurrentDate(), true, false)}-${parseInt(
      Math.random() * 10000,
    ) + 1000}`;

    updateOrder({ ...order, status: "pending" });

    setTimeout(() => {
      firebase.set({
        path: "orders",
        document: order.idempotencyToken,
        data: {
          ...order,
          cart,
          number,
          userInfo,
          status: "requested",
        },
      });
    }, 3000);

    firebase.setAnalyticsEvent("back-to-menu");
  }

  function placeNewOrder() {
    clearCart();
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
      cart={cart}
      order={order}
      userInfo={userInfo}
      rateOrder={rateOrder}
      closeCart={closeCart}
      makeOrder={makeOrder}
      scheduleOpen={scheduleOpen}
      commentOrder={commentOrder}
      requestOrder={requestOrder}
      placeNewOrder={placeNewOrder}
      updateUserInfo={updateUserInfo}
      removeFromCart={removeFromCart}
      deliveryNoticeOpen={deliveryNoticeOpen}
    />
  );
};

export default withFirebase(CartContainer);
