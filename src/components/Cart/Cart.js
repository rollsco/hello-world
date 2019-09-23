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
  Button,
} from "@material-ui/core";
import Item from "./Item";
import Header from "./Header";
import DeliveryNotice from "./DeliveryNotice";
import { currency } from "../../services/formatter";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import { BottomButtonPaper } from "../components";

const StyledContainer = styled(Container)`
  margin-top: 88px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const calculateTotalCost = items =>
  items.reduce((priceSum, item) => priceSum + item.product.price, 0);

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
        <Table size="small">
          <TableBody>
            {cart.items.map((item, index) => (
              <Item item={item} key={index} removeFromCart={removeFromCart} />
            ))}
            <TableRow>
              <TableCell>
                <Typography variant="h6">Subtotal</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">
                  {currency(calculateTotalCost(cart.items))}
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      <UserInfoContainer />

      <DeliveryNotice />

      <BottomButtonPaper>
        <Button variant="contained" color="secondary">
          Listo: confirmar pedido
        </Button>
      </BottomButtonPaper>
    </StyledContainer>
  </Dialog>
);

export default Cart;
