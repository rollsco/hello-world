import React from "react";
import { Button } from "@material-ui/core";
import { CartButtonBox } from "./components";

const PlaceNewOrderButton = ({ order, placeNewOrder }) => {
  if (!order.status) {
    return null;
  }

  return (
    <CartButtonBox>
      <Button color="secondary" variant="contained" onClick={placeNewOrder}>
        Volver a la carta
      </Button>
    </CartButtonBox>
  );
};

export default PlaceNewOrderButton;
