import React from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";
import { withFirebase } from "../FirebaseContext";
import { createToken } from "../../services/token";
import { telegramBot } from "../../services/telegram/service";

const initialStateUserInfo = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
  notes: "",
};

const getInitialStateOrder = () => ({
  status: null,
  errors: null,
  idempotencyToken: createToken(),
});

const CartContainer = ({
  cart,
  firebase,
  clearCart,
  removeFromCart,
  handleCloseCart,
}) => {
  const [userInfo, setUserInfo] = React.useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );

  const [order, setOrder] = React.useState(
    getLocalStorageItem("order", { ...getInitialStateOrder() }),
  );

  // onMount
  React.useEffect(() => {
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

      if (orderOnFirebase.status === "pending") {
        sendToTelegram(orderOnFirebase);
      }
    } else if (order.status === "pending") {
      // NO Order on Firebase with same idempotencytoken, but local order Pending
      updateOrder({
        ...order,
        status: "failed",
      });
    }
  }

  function sendToTelegram(orderOnFirebase) {
    telegramBot.sendMessage(orderOnFirebase, {
      onSuccess: confirmOrder,
      onError: rejectOrder,
    });
  }

  function updateUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
    setLocalStorageItem("userInfo", newUserInfo);
  }

  function userInfoComplete() {
    const emptyPropertyKeys = Object.keys(userInfo).filter(
      key => key !== "notes" && !userInfo[key],
    );

    return emptyPropertyKeys.length <= 0;
  }

  function updateOrder(order) {
    setOrder(order);
    setLocalStorageItem("order", order);
  }

  function requestOrder() {
    if (!userInfoComplete()) {
      return;
    }

    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
      data: {
        ...order,
        cart,
        userInfo,
        status: "pending",
      },
    });
  }

  function confirmOrder() {
    setTimeout(() => {
      firebase.set({
        path: "orders",
        doc: order.idempotencyToken,
        data: {
          ...order,
          status: "confirmed",
        },
      });
    }, 2000);
  }

  function rejectOrder() {
    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
      data: {
        ...order,
        status: "rejected",
      },
    });
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
      commentOrder={commentOrder}
      requestOrder={requestOrder}
      placeNewOrder={placeNewOrder}
      updateUserInfo={updateUserInfo}
      removeFromCart={removeFromCart}
      handleCloseCart={handleCloseCart}
      userInfoComplete={userInfoComplete}
    />
  );
};

export default withFirebase(CartContainer);
