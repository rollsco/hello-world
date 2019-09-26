import React from "react";
import UserInfo from "./UserInfo";

const UserInfoContainer = ({ userInfo, updateUserInfo }) => {
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
