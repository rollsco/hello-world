import React from "react";
import { Button, Typography } from "@material-ui/core";
import { CartButtonBox } from "./components";
import { requiredUserInfoFields } from "./initialState";

const ConfirmationButton = ({ makeOrder, userInfo }) => {
  function userInfoComplete() {
    const emptyPropertyKeys = Object.keys(userInfo).filter(
      key => requiredUserInfoFields.includes(key) && !userInfo[key],
    );

    return emptyPropertyKeys.length <= 0;
  }

  return (
    <CartButtonBox>
      <Button
        color="secondary"
        variant="contained"
        onClick={makeOrder}
        disabled={!userInfoComplete()}
      >
        {userInfoComplete() ? (
          "Listo: hacer pedido"
        ) : (
          <Typography variant="caption">
            ¡Por favor llena tus datos primero!
          </Typography>
        )}
      </Button>
    </CartButtonBox>
  );
};

export default ConfirmationButton;
