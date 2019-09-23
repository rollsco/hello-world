import React from "react";
import UserInfo from "./UserInfo";

const initialState = {
  name: "",
  address: "",
  locality: "",
  email: "",
  phone: "",
};

const UserInfoContainer = () => {
  const localStorageUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [userInfo, setUserInfo] = React.useState(
    localStorageUserInfo ? localStorageUserInfo : initialState,
  );

  function updateUserInfo(userInfo) {
    setUserInfo(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }

  function handleChange({ target }) {
    const { name, value } = target;

    updateUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  return <UserInfo userInfo={userInfo} handleChange={handleChange} />;
};

export default UserInfoContainer;
