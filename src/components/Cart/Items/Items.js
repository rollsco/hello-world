import React from "react";
import Item from "./Item";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { currency } from "../../../services/formatter";
import { CartPaper } from "../components";
import { applyDiscountPercentage } from "../../../transformer";

const discountPercentage = process.env.REACT_APP_DISCOUNT_PERCENTAGE;

const calculateTotalCost = items =>
  items.reduce((priceSum, item) => priceSum + item.product.price, 0);

const Discount = ({ totalCost }) => {
  if (!discountPercentage) {
    return null;
  }

  const discounedPrice = applyDiscountPercentage(totalCost, discountPercentage);

  return (
    <TableRow>
      <TableCell>
        <Typography variant="h6" color="secondary">
          Descuento
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography variant="h6" color="secondary">
          {currency(discounedPrice)}
        </Typography>
      </TableCell>
      <TableCell>
        <Typography variant="h6" color="secondary">
          (-{discountPercentage}%)
        </Typography>
      </TableCell>
    </TableRow>
  );
};

const Items = ({ order, items, removeFromCart }) => (
  <CartPaper>
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

        <Discount totalCost={calculateTotalCost(items)} />
      </TableBody>
    </Table>
  </CartPaper>
);

export default Items;
