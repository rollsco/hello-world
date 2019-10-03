import React, { Fragment } from "react";
import { Fab, IconButton } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

export const AddToCart = ({
  numberOnCart,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Fragment>
    <IconButton
      size="small"
      onClick={handleAddToCart}
      aria-label="Agregar al pedido"
      color="secondary"
    >
      <Add />
    </IconButton>
    {numberOnCart > 0 && false && (
      <IconButton
        size="small"
        onClick={handleRemoveFromCart}
        aria-label="Quitar del pedido"
      >
        <Remove />
      </IconButton>
    )}
  </Fragment>
);
