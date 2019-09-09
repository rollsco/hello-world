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
  IconButton
} from "@material-ui/core";
import Header from "./Header";
import { currency } from "../../services/formatter";
import Delete from "@material-ui/icons/Delete";

const StyledContainer = styled(Container)`
  margin-top: 88px;
`;

// TODO make global
const ProductName = styled(Typography)`
  text-transform: capitalize;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Row = ({ product }) => (
  <TableRow>
    <TableCell>
      <ProductName variant="subtitle1">{product.name}</ProductName>
    </TableCell>
    <TableCell align="right">
      <Typography variant="subtitle1">{currency(product.price)}</Typography>
    </TableCell>
    <TableCell align="right">
      <IconButton>
        <Delete />
      </IconButton>
    </TableCell>
  </TableRow>
);

const ShoppingCart = ({ cart, handleCloseCart }) => (
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
              <Row product={product} key={index} />
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

export default ShoppingCart;
