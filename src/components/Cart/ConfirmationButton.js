import React from "react";
import { Button, Typography } from "@material-ui/core";

const ConfirmationButton = ({ order, requestOrder, userInfoComplete }) => {
  if (order.status) {
    return null;
  }

  return (
    <Button
      disabled={!userInfoComplete()}
      color="secondary"
      variant="contained"
      onClick={requestOrder}
    >
      {userInfoComplete() ? (
        "Listo: hacer pedido"
      ) : (
        <Typography variant="caption">
          ¡Por favor llena tus datos primero!
        </Typography>
      )}
    </Button>
  );
};

export default ConfirmationButton;
