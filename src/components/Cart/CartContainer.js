import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";
import { withFirebase } from "../FirebaseContext";
import { initialStateUserInfo, getInitialStateOrder } from "./initialState";
import { utcDate } from "../../services/formatter";

const isStoreOpen = (date = new Date()) => {
  const isOpenDay = [2, 3, 4, 5, 6, 7].includes(date.getUTCDay());
  const isLongHoursDay = [5, 6, 7].includes(date.getUTCDay());
  const openHour = isLongHoursDay ? 1700 : 2100;
  const hour = date.getUTCHours() * 100 + date.getUTCMinutes();
  const isOpenHour = hour >= openHour || hour < 230;

  console.log("--isStoreOpen", isOpenDay && isOpenHour);

  return isOpenDay && isOpenHour;
};

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

  /** @type Date */
  const firebaseDate = firebase.getCurrentDate();

  const makeOrder = () => {
    if (isStoreOpen(firebaseDate)) {
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

  function updateUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
    setLocalStorageItem("userInfo", newUserInfo);
  }

  function updateOrder(order) {
    setOrder(order);
    setLocalStorageItem("order", order);
  }

  function requestOrder() {
    const number = `${utcDate(firebaseDate, true, false)}-${parseInt(
      Math.random() * 10000,
    ) + 1000}`;

    updateOrder({ ...order, status: "pending" });

    setTimeout(() => {
      firebase.set({
        path: "orders",
        doc: order.idempotencyToken,
        data: {
          ...order,
          cart,
          number,
          userInfo,
          status: "requested",
        },
      });
    }, 3000);
  }

  function placeNewOrder() {
    clearCart();
    updateOrder(getInitialStateOrder());
  }

  function rateOrder(rating) {
    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
      data: {
        ...order,
        rating,
      },
    });
  }

  function commentOrder(comments) {
    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
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
