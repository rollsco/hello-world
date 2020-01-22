import React, { Fragment } from "react";
import {
  IconButton,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Typography,
} from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { currency } from "../../../services/formatter/formatter";
import { Image, BasicInfo, CartName } from "./components";
import { DialogPaper } from "../../UI/FullscreenDialog/components";
import { getVariantImagePathname } from "../../../state/Variant";

const Item = ({ orderAndActions, item, cartAndActions }) => (
  <DialogPaper>
    <Table size="small">
      <TableBody>
        {[item.main, ...item.extras]
          .filter(variant => variant)
          .map(variant => (
            <TableRow key={variant.id}>
              <TableCell>
                <BasicInfo>
                  <Image
                    src={getVariantImagePathname({ variantId: variant.id })}
                  />
                  <CartName>{variant.name}</CartName>
                </BasicInfo>
              </TableCell>

              <TableCell align="right">
                <Typography variant="subtitle1">
                  {currency(item.main.price)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}

        {!orderAndActions.order.status && (
          <TableRow>
            <TableCell colSpan={99} align="right">
              <Fragment>
                <IconButton
                  size="small"
                  onClick={() => cartAndActions.setCustomizingItem(item)}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={() => cartAndActions.removeItem(item)}
                >
                  <Delete />
                </IconButton>
              </Fragment>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </DialogPaper>
);

export default Item;
