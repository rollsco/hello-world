import React, { Fragment } from "react";
import Item from "./Item";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { currency } from "../../../services/formatter/formatter";
import { DialogPaper } from "../../UI/FullscreenDialog/components";
import { applyDiscountPercentage } from "../../../services/transformer/transformer";

const discountPercentage = process.env.REACT_APP_DISCOUNT_PERCENTAGE;

const calculateTotalCost = items =>
  items.reduce((priceSum, item) => priceSum + item.totalPrice, 0);

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

const Items = ({ order, cartAndActions, setVariantIds }) => (
  <Fragment>
    {cartAndActions.cart.items.map((item, index) => (
      <Item
        item={item}
        key={index}
        order={order}
        setVariantIds={setVariantIds}
        cartAndActions={cartAndActions}
      />
    ))}

    <DialogPaper>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Total pedido</Typography>
            </TableCell>

            <TableCell align="right">
              <Typography variant="h6">
                {currency(calculateTotalCost(cartAndActions.cart.items))}
              </Typography>
            </TableCell>

            <TableCell />
          </TableRow>

          <Discount totalCost={calculateTotalCost(cartAndActions.cart.items)} />
        </TableBody>
      </Table>
    </DialogPaper>
  </Fragment>
);

export default Items;
