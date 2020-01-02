import React, { Fragment } from "react";
import {
  IconButton,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@material-ui/core";
import { OverflowWrapTypography } from "../../components";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { currency } from "../../../services/formatter/formatter";
import { Image, BasicInfo, CartName } from "./components";
import { variants } from "../../../data/variants";
import { DialogPaper } from "../../UI/FullscreenDialog/components";

const imgDirectory = `img/data`;

const Item = ({ order, item, cart, updateCart }) => {
  const removeFromCart = itemToRemove => {
    const items = cart.items.filter(item => item.id !== itemToRemove.id);

    if (items.length === 0) {
      cart.open = false;
    }

    updateCart({
      ...cart,
      items,
    });
  };

  return (
    <DialogPaper>
      <Table size="small">
        <TableBody>
          {[item.main, item.drink, ...item.extras]
            .filter(variant => variant)
            .map(variant => (
              <TableRow>
                <TableCell>
                  <BasicInfo>
                    <Image
                      src={`${imgDirectory}/${variants[variant.id].image[0].filename}`}
                    />
                    <CartName>{variant.name}</CartName>
                  </BasicInfo>
                </TableCell>

                <TableCell align="right">
                  <OverflowWrapTypography variant="subtitle1">
                    <pre>{currency(item.main.price)}</pre>
                  </OverflowWrapTypography>
                </TableCell>
              </TableRow>
            ))}

          <TableRow>
            <TableCell colSpan={99} align="right">
              {!order.status && (
                <Fragment>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => removeFromCart(item)}>
                    <Delete />
                  </IconButton>
                </Fragment>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </DialogPaper>
  );
};

export default Item;
