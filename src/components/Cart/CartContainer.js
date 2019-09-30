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

const initialStateOrder = {
  status: "",
  errors: [],
  idempotencyToken: createToken(),
};

const SectionContainer = ({
  cart,
  firebase,
  handleCloseCart,
  removeFromCart,
}) => {
  const [userInfo, setUserInfo] = React.useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );

  const [order, setOrder] = React.useState(
    getLocalStorageItem("order", { ...initialStateOrder }),
  );

  // onMount
  React.useEffect(() => {
    // update Order on local and state
    updateOrder(order);

    // listen for Order on Firebase
    firebase.onDocument("orders", order.idempotencyToken, {
      callback: firebaseOrder => {
        // If there's Order in Firebase, override local
        // TODO merge(?)
        if (firebaseOrder) {
          updateOrder(firebaseOrder);

          if (firebaseOrder.status === "pending") {
            telegramBot.sendMessage(`${JSON.stringify(order)}`, {
              onSuccess: confirmOrder,
              onError: rejectOrder,
            });
          }
        } else if (order.status === "pending") {
          updateOrder({
            ...order,
            status: "failed",
          });
        }
      },
      errorCallback: () => {},
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
    if (!userInfoComplete) {
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
    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
      data: {
        ...order,
        status: "confirmed",
      },
    });
  }

  function acceptOrder() {
    firebase.set({
      path: "orders",
      doc: order.idempotencyToken,
      data: {
        ...order,
        status: "accepted",
      },
    });
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

  return (
    <Cart
      cart={cart}
      order={order}
      userInfo={userInfo}
      acceptOrder={acceptOrder}
      requestOrder={requestOrder}
      updateUserInfo={updateUserInfo}
      removeFromCart={removeFromCart}
      handleCloseCart={handleCloseCart}
      userInfoComplete={userInfoComplete}
    />
  );
};

export default withFirebase(SectionContainer);
