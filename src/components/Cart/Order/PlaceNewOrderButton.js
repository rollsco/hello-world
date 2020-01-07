import React from "react";
import { Button } from "@material-ui/core";
import { CartButtonBox } from "../components";

const PlaceNewOrderButton = ({ orderAndActions }) => {
  if (!orderAndActions.order.status) {
    return null;
  }

  return (
    <CartButtonBox>
      <Button
        color="secondary"
        variant="contained"
        onClick={orderAndActions.placeNewOrder}
      >
        Volver a la carta
      </Button>
    </CartButtonBox>
  );
};

export default PlaceNewOrderButton;
