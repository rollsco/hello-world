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
import { getNewCart } from "../../entities/Cart";

const CartContainer = ({ cart, updateCart, firebase }) => {
  const [userInfo, setUserInfo] = useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );

  const [order, setOrder] = useState(
    getLocalStorageItem("order", { ...getInitialStateOrder() }),
  );
  const [currentDate, setCurrentDate] = useState(null);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [deliveryNoticeOpen, setDeliveryNoticeOpen] = useState(false);

  const closeCart = () => {
    updateCart({ ...cart, open: false });
  };

  const clearCart = () => {
    updateCart(getNewCart());
  };

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
      updateCart={updateCart}
      scheduleOpen={scheduleOpen}
      commentOrder={commentOrder}
      requestOrder={requestOrder}
      placeNewOrder={placeNewOrder}
      updateUserInfo={updateUserInfo}
      deliveryNoticeOpen={deliveryNoticeOpen}
    />
  );
};

export default withFirebase(CartContainer);
