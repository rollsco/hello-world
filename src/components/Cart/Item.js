import React from "react";
import styled from "styled-components";
import { IconButton, Typography, TableRow, TableCell } from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";
import { currency } from "../../services/formatter";

// TODO make global
const ProductName = styled(Typography)`
  text-transform: capitalize;
`;

const Item = ({ item, removeFromCart }) => (
  <TableRow>
    <TableCell>
      <ProductName variant="subtitle1">{item.product.name}</ProductName>
    </TableCell>
    <TableCell align="right">
      <Typography variant="subtitle1">
        {currency(item.product.price)}
      </Typography>
    </TableCell>
    <TableCell align="right">
      <IconButton onClick={() => removeFromCart(item)}>
        <Delete />
      </IconButton>
    </TableCell>
  </TableRow>
);

export default Item;
