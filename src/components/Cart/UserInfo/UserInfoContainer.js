import React from "react";
import UserInfo from "./UserInfo";

const UserInfoContainer = ({ userInfo, updateUserInfo }) => {
  function handleChange({ target }) {
    const { name, value, checked } = target;

    updateUserInfo({
      ...userInfo,
      [name]: target.type === "text" ? value : checked,
    });
  }

  return <UserInfo userInfo={userInfo} handleChange={handleChange} />;
};

export default UserInfoContainer;
