import React from "react";
import styled from "styled-components";
import { IconButton, TableRow, TableCell } from "@material-ui/core";
import { OverflowWrapTypography } from "../../components";
import Delete from "@material-ui/icons/Delete";
import { currency } from "../../../services/formatter/formatter";
import { Name } from "../../Product/components";

const Item = ({ order, item, removeFromCart }) => (
  <TableRow>
    <TableCell>
      <Name variant="caption">{item.main.name}</Name>
    </TableCell>
    <TableCell align="right">
      <OverflowWrapTypography variant="subtitle1">
        {currency(item.main.price)}
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
