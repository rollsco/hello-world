import React from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";
import { withFirebase } from "../FirebaseContext";
import { initialStateUserInfo, getInitialStateOrder } from "./initialState";

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
    const number = `2019-10-01-${parseInt(Math.random() * 10000) + 1000}`;

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
      commentOrder={commentOrder}
      requestOrder={requestOrder}
      placeNewOrder={placeNewOrder}
      updateUserInfo={updateUserInfo}
      removeFromCart={removeFromCart}
      handleCloseCart={handleCloseCart}
    />
  );
};

export default withFirebase(CartContainer);
