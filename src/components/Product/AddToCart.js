import React, { Fragment } from "react";
import { IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/ShoppingCart";
import Remove from "@material-ui/icons/Remove";

export const AddToCart = ({
  numberOnCart,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Fragment>
    {numberOnCart > 0 && (
      <IconButton
        size="small"
        onClick={handleRemoveFromCart}
        aria-label="Quitar del pedido"
      >
        <Remove />
      </IconButton>
    )}
    <IconButton
      size="small"
      onClick={handleAddToCart}
      aria-label="Agregar al pedido"
      color="secondary"
    >
      <Add />
    </IconButton>
  </Fragment>
);
