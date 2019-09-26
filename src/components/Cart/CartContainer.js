import React from "react";
import Cart from "./Cart";

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
  const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [userInfo, setUserInfo] = React.useState(
    localStorageUserInfo ? localStorageUserInfo : initialStateUserInfo,
  );
  const [order, setOrder] = React.useState(initialStateOrder);

  function updateUserInfo(newUserInfo) {
    setUserInfo(newUserInfo);
    localStorage.setItem("userInfo", JSON.stringify(newUserInfo));
  }

  function userInfoComplete() {
    const emptyPropertyKeys = Object.keys(userInfo).filter(
      key => !userInfo[key],
    );

    return emptyPropertyKeys.length <= 0;
  }

  function requestOrder() {
    // TODO call API endpoint to request new Order, with cart and userInfo
    if (!userInfoComplete) {
      return;
    }

    setOrder({
      ...order,
      status: "pending",
    });

    setTimeout(() => {
      setOrder({
        ...order,
        status: "confirmed",
      });
    }, 3000);

    const response = true;
    if (response) {
    }
  }

  function acceptOrder() {
    setOrder({
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
