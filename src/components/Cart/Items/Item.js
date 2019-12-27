import React from "react";
import styled from "styled-components";
import { IconButton, TableRow, TableCell } from "@material-ui/core";
import { OverflowWrapTypography } from "../../components";
import Delete from "@material-ui/icons/Delete";
import { currency } from "../../../services/formatter/formatter";

// TODO make global
const ProductName = styled(OverflowWrapTypography)`
  text-transform: capitalize;
`;

const Item = ({ order, item, removeFromCart }) => (
  <TableRow>
    <TableCell>
      <ProductName variant="subtitle1">{item.product.name}</ProductName>
    </TableCell>
    <TableCell align="right">
      <OverflowWrapTypography variant="subtitle1">
        {currency(item.product.price)}
      </OverflowWrapTypography>
    </TableCell>
    <TableCell align="right">
      {!order.status && (
        <IconButton onClick={() => removeFromCart(item)}>
          <Delete />
        </IconButton>
      )}
    </TableCell>
  </TableRow>
);

export default Item;
