import React, { Fragment } from "react";
import { Fab } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";

export const AddToCart = ({
  numberOnCart,
  handleAddToCart,
  handleRemoveFromCart,
}) => (
  <Fragment>
    <Fab
      size="small"
      onClick={handleAddToCart}
      aria-label="Agregar al pedido"
      color="secondary"
    >
      <Add />
    </Fab>
    {numberOnCart > 0 && (
      <Fab
        size="small"
        onClick={handleRemoveFromCart}
        aria-label="Quitar del pedido"
      >
        <Remove />
      </Fab>
    )}
  </Fragment>
);
