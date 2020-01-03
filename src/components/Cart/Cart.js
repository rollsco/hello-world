import React, { Fragment } from "react";
import { Dialog } from "@material-ui/core";
import Items from "./Items/Items";
import Feedback from "./Feedback/Feedback";
import Header from "../UI/FullscreenDialog/Header";
import Content from "../UI/FullscreenDialog/Content";
import ConfirmationButton from "./ConfirmationButton";
import ConfirmationNotice from "./Order/ConfirmationNotice";
import UserInfoContainer from "./UserInfo/UserInfoContainer";
import PlaceNewOrderButton from "./Order/PlaceNewOrderButton";
import DeliveryNotices from "./DeliveryNotices/DeliveryNotices";
import ClosedNotice from "./ClosedNotice/ClosedNotice";
import { DialogTransition } from "../components";

const Cart = ({
  cart,
  order,
  userInfo,
  rateOrder,
  closeCart,
  makeOrder,
  updateCart,
  scheduleOpen,
  commentOrder,
  requestOrder,
  setVariantIds,
  placeNewOrder,
  updateUserInfo,
  deliveryNoticeOpen,
}) => (
  <Dialog
    fullScreen
    open={cart.open}
    TransitionComponent={DialogTransition}
    onClose={(!order.status && closeCart) || null}
  >
    <Header
      title="Tu Pedido"
      hideCloseButton={order.status}
      onCloseButtonClick={closeCart}
    />

    <Content>
      <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />

      <ConfirmationNotice order={order} />

      <Items
        order={order}
        items={cart.items}
        cart={cart}
        updateCart={updateCart}
        setVariantIds={setVariantIds}
      />

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
    </Content>
  </Dialog>
);

export default Cart;
