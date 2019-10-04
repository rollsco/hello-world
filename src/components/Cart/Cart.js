import React, { Fragment } from "react";
import styled from "styled-components";
import { Dialog, Slide, Container } from "@material-ui/core";
import Header from "./Header";
import DeliveryNotice from "./DeliveryNotice";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import { BottomButtonPaper } from "../components";
import ConfirmationNotice from "./ConfirmationNotice";
import Items from "./Items/Items";
import ConfirmationButton from "./ConfirmationButton";
import PlaceNewOrderButton from "./PlaceNewOrderButton";

const StyledContainer = styled(Container)`
  margin-top: 88px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({
  cart,
  order,
  userInfo,
  requestOrder,
  placeNewOrder,
  updateUserInfo,
  removeFromCart,
  handleCloseCart,
  userInfoComplete,
}) => (
  <Dialog
    fullScreen
    open={cart.open}
    onClose={!order.status && handleCloseCart}
    TransitionComponent={Transition}
  >
    <Header order={order} handleCloseCart={handleCloseCart} />

    <StyledContainer maxWidth="sm">
      <Items order={order} items={cart.items} removeFromCart={removeFromCart} />

      {!order.status && (
        <Fragment>
          <UserInfoContainer
            userInfo={userInfo}
            updateUserInfo={updateUserInfo}
          />

          <DeliveryNotice />
        </Fragment>
      )}

      <ConfirmationNotice order={order} />

      <BottomButtonPaper>
        <ConfirmationButton
          order={order}
          requestOrder={requestOrder}
          userInfoComplete={userInfoComplete}
        />
        <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />
      </BottomButtonPaper>
    </StyledContainer>
  </Dialog>
);

export default Cart;
