import React from "react";
import Item from "./Item";
import {
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { currency } from "../../../services/formatter";

const calculateTotalCost = items =>
  items.reduce((priceSum, item) => priceSum + item.product.price, 0);

const Items = ({ order, items, removeFromCart }) => (
  <Paper>
    <Table size="small">
      <TableBody>
        {items.map((item, index) => (
          <Item
            order={order}
            item={item}
            key={index}
            removeFromCart={removeFromCart}
          />
        ))}
        <TableRow>
          <TableCell>
            <Typography variant="h6">Subtotal</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="h6">
              {currency(calculateTotalCost(items))}
            </Typography>
          </TableCell>
          <TableCell />
        </TableRow>
      </TableBody>
    </Table>
  </Paper>
);

export default Items;
