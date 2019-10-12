import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { Dialog, Slide, Container } from "@material-ui/core";
import Header from "./Header";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import ConfirmationNotice from "./ConfirmationNotice";
import Items from "./Items/Items";
import ConfirmationButton from "./ConfirmationButton";
import PlaceNewOrderButton from "./PlaceNewOrderButton";
import DeliveryNotices from "./DeliveryNotices/DeliveryNotices";

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
  requestOrder,
  placeNewOrder,
  updateUserInfo,
  removeFromCart,
  handleCloseCart,
  userInfoComplete,
}) => {
  const [isOpenDeliveryNotice, setIsOpenDeliveryNotice] = useState(false);

  return (
    <Dialog
      fullScreen
      open={cart.open}
      TransitionComponent={Transition}
      onClose={(!order.status && handleCloseCart) || null}
    >
      <Header order={order} handleCloseCart={handleCloseCart} />

      <StyledContainer maxWidth="sm">
        <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />

        <ConfirmationNotice order={order} />

        <Items
          order={order}
          items={cart.items}
          removeFromCart={removeFromCart}
        />

        {!order.status && (
          <Fragment>
            <UserInfoContainer
              userInfo={userInfo}
              updateUserInfo={updateUserInfo}
            />

            <DeliveryNotices
              isOpenDeliveryNotice={isOpenDeliveryNotice}
              requestOrder={requestOrder}
            />
          </Fragment>
        )}

        <ConfirmationButton
          order={order}
          userInfoComplete={userInfoComplete}
          setIsOpenDeliveryNotice={setIsOpenDeliveryNotice}
        />
      </StyledContainer>
    </Dialog>
  );
};

export default Cart;
