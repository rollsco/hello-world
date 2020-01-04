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
  order,
  userInfo,
  rateOrder,
  makeOrder,
  scheduleOpen,
  commentOrder,
  requestOrder,
  setVariantIds,
  placeNewOrder,
  updateUserInfo,
  cartAndActions,
  deliveryNoticeOpen,
}) => (
  <Dialog
    fullScreen
    open={cartAndActions.open}
    TransitionComponent={DialogTransition}
  >
    <Header
      title="Tu Pedido"
      hideCloseButton={order.status}
      onCloseButtonClick={cartAndActions.close}
    />

    <Content>
      <PlaceNewOrderButton order={order} placeNewOrder={placeNewOrder} />

      <ConfirmationNotice order={order} />

      <Items
        order={order}
        setVariantIds={setVariantIds}
        cartAndActions={cartAndActions}
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

          <ClosedNotice
            scheduleOpen={scheduleOpen}
            closeCart={cartAndActions.closeCart}
          />

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
