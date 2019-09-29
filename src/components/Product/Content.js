import React from "react";
import { CardContent, Typography } from "@material-ui/core";
import { currency } from "../../services/formatter";

const Content = ({ product }) => (
  <CardContent>
    <Typography variant="subtitle1">{product.name}</Typography>
    <Typography variant="subtitle2" color="secondary">
      {currency(product.price)}
    </Typography>
    <Typography variant="caption">{product.pieces} piezas</Typography>
  </CardContent>
);

export default Content;
