import React from "react";
import styled from "styled-components";
import {
  Dialog,
  Slide,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import Header from "./Header";
import { currency } from "../../services/formatter";
import Item from "./Item";

const StyledContainer = styled(Container)`
  margin-top: 88px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({ cart, handleCloseCart, removeFromCart }) => (
  <Dialog
    fullScreen
    open={cart.open}
    onClose={handleCloseCart}
    TransitionComponent={Transition}
  >
    <Header handleCloseCart={handleCloseCart} />

    <StyledContainer maxWidth="sm">
      <Paper>
        <Table>
          <TableBody>
            {cart.products.map((product, index) => (
              <Item product={product} key={index} removeFromCart={removeFromCart} />
            ))}
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Subtotal</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle1">{currency(34000)}</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Total</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">{currency(37500)}</Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </StyledContainer>
  </Dialog>
);

export default Cart;
