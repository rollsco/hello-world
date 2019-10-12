import React from "react";
import { Button, Typography } from "@material-ui/core";
import { CartButtonBox } from "./components";

const ConfirmationButton = ({
  order,
  setIsOpenDeliveryNotice,
  userInfoComplete,
}) => {
  if (order.status) {
    return null;
  }

  return (
    <CartButtonBox>
      <Button
        color="secondary"
        variant="contained"
        disabled={!userInfoComplete()}
        onClick={() => setIsOpenDeliveryNotice(true)}
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
