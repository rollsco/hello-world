import React, { Fragment } from "react";
import { Fab } from "@material-ui/core";
import Add from "@material-ui/icons/Add";

export const AddToCart = () => {
  const isOnCart = Math.random() * 4 < 1;
  return (
    <Fab
      color={isOnCart ? "primary" : "secondary"}
      size="small"
      aria-label="Agregar al pedido"
    >
      <Add />
    </Fab>
  );
};
