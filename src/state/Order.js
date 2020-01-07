import { createToken } from "../services/tokenGenerator/tokenGenerator";
import { setLocalStorageItem } from "../services/localStorage/localStorage";
import { utcDate } from "../services/formatter/formatter";
import {
  ORDER_STATUS_PENDING,
  ORDER_STATUS_REQUESTED,
} from "../components/Cart/Order/orderStatusMap";

export const getInitialStateOrder = () => ({
  status: null,
  errors: null,
  idempotencyToken: createToken(),
});

export const getOrderAndActions = ({
  orderAndSet,
  cartAndActions,
  currentDate,
  userInfo,
  firebase,
}) => {
  const [order, setOrder] = orderAndSet;

  const updateOrder = order => {
    setOrder(order);
    setLocalStorageItem("order", order);
  };

  const onFirebaseChange = orderOnFirebase => {
    // If there's Order in Firebase, override local
    if (orderOnFirebase) {
      updateOrder(orderOnFirebase);
    }
  };

  const request = () => {
    const number = `${utcDate(currentDate, true, false)}-${parseInt(
      Math.random() * 10000,
    ) + 1000}`;

    updateOrder({ ...order, status: ORDER_STATUS_PENDING });

    setTimeout(() => {
      firebase.set({
        path: "orders",
        document: order.idempotencyToken,
        data: {
          ...order,
          number,
          userInfo,
          status: ORDER_STATUS_REQUESTED,
          cart: cartAndActions.cart,
        },
      });
    }, 3000);
  };

  const placeNewOrder = () => {
    cartAndActions.clear();
    updateOrder(getInitialStateOrder());
  };

  const rate = rating => {
    firebase.set({
      path: "orders",
      document: order.idempotencyToken,
      data: {
        ...order,
        rating,
      },
    });
  };

  const comment = comments => {
    firebase.set({
      path: "orders",
      document: order.idempotencyToken,
      data: {
        ...order,
        comments,
      },
    });
  };

  return {
    order,
    rate,
    request,
    comment,
    placeNewOrder,
    onFirebaseChange,
  };
};
