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

  const processOrderEditedOnFirebase = firebaseOrder => {
    // If there's Order in Firebase, override local
    // TODO merge(?)
    if (firebaseOrder) {
      updateOrder(firebaseOrder);

      if (firebaseOrder.status === "pending") {
        telegramBot.sendMessage(telegramBot.createOrderMessage(firebaseOrder), {
          onSuccess: confirmOrder,
          onError: rejectOrder,
        });
      }
      // Order with same Idempotency token not fonud on Firebase, and local order Pending
    } else if (order.status === "pending") {
      updateOrder({
        ...order,
        status: "failed",
      });
    }
  };

  // onMount
  React.useEffect(() => {
    // listen for Order on Firebase
    firebase.onDocument("orders", order.idempotencyToken, {
      onSnapshot: processOrderEditedOnFirebase,
    });
  }, []);

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
