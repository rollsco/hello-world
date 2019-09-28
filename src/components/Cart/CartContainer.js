import React from "react";
import Cart from "./Cart";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";

const initialStateUserInfo = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
};

const initialStateOrder = {
  status: "",
  errors: [],
};

const SectionContainer = ({ cart, handleCloseCart, removeFromCart }) => {
  const [userInfo, setUserInfo] = React.useState(
    getLocalStorageItem("userInfo", initialStateUserInfo),
  );
  const [order, setOrder] = React.useState(
    getLocalStorageItem("order", initialStateOrder),
  );

  function updateUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
    setLocalStorageItem("userInfo", newUserInfo);
  }

  function userInfoComplete() {
    const emptyPropertyKeys = Object.keys(userInfo).filter(
      key => !userInfo[key],
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

    // TODO call API endpoint to request new Order, with cart and userInfo
    updateOrder({
      ...order,
      status: "pending",
    });
  }

  function acceptOrder() {
    updateOrder({
      ...order,
      status: "accepted",
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

export default SectionContainer;
