import React from "react";
import { Button, Typography } from "@material-ui/core";

const PlaceNewOrderButton = ({ order, placeNewOrder }) => {
  if (!order.status) {
    return null;
  }

  return (
    <Button color="secondary" variant="contained" onClick={placeNewOrder}>
      Hacer otro pedido
    </Button>
  );
};

export default PlaceNewOrderButton;
