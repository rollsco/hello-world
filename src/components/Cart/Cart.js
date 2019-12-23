import React, { Fragment } from "react";
import styled from "styled-components";
import { Dialog, Slide, Container } from "@material-ui/core";
import Header from "./Header";
import Items from "./Items/Items";
import Feedback from "./Feedback/Feedback";
import ConfirmationNotice from "./Order/ConfirmationNotice";
import ConfirmationButton from "./ConfirmationButton";
import PlaceNewOrderButton from "./Order/PlaceNewOrderButton";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import DeliveryNotices from "./DeliveryNotices/DeliveryNotices";
import ClosedNotice from "./ClosedNotice/ClosedNotice";

const StyledContainer = styled(Container)`
  margin-top: 56px;
`;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Cart = ({
  cart,
  order,
  userInfo,
  rateOrder,
  closeCart,
  makeOrder,
  scheduleOpen,
  commentOrder,
  requestOrder,
  placeNewOrder,
  updateUserInfo,
  removeFromCart,
  deliveryNoticeOpen,
}) => (
  <Dialog
    fullScreen
    open={cart.open}
    TransitionComponent={Transition}
    onClose={(!order.status && closeCart) || null}
  >
    <Header order={order} closeCart={closeCart} />

    <StyledContainer maxWidth="sm">
      <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />

      <ConfirmationNotice order={order} />

      <Items order={order} items={cart.items} removeFromCart={removeFromCart} />

      <Feedback
        order={order}
        rateOrder={rateOrder}
        commentOrder={commentOrder}
      />

      <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />

      {!order.status && (
        <Fragment>
          <UserInfoContainer
            userInfo={userInfo}
            updateUserInfo={updateUserInfo}
          />

          <DeliveryNotices
            requestOrder={requestOrder}
            isOpenDeliveryNotice={deliveryNoticeOpen}
          />

          <ClosedNotice scheduleOpen={scheduleOpen} closeCart={closeCart} />

          <ConfirmationButton
            order={order}
            userInfo={userInfo}
            makeOrder={makeOrder}
          />
        </Fragment>
      )}
    </StyledContainer>
  </Dialog>
);

export default Cart;
