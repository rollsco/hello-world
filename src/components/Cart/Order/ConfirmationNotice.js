import React from "react";
import { DialogContentText } from "@material-ui/core";
import {
  CartPaper,
  DialogTitleCenter,
  DialogContentCenter,
} from "../components";
import {
  orderStatusMap,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_ACCEPTED,
  ORDER_STATUS_REQUESTED,
  ORDER_STATUS_DISPATCHED,
} from "./orderStatusMap";
import { StepsProgress } from "../../UI/StepsProgress";

const steps = [
  orderStatusMap[ORDER_STATUS_PENDING].value,
  orderStatusMap[ORDER_STATUS_REQUESTED].value,
  orderStatusMap[ORDER_STATUS_ACCEPTED].value,
  orderStatusMap[ORDER_STATUS_DISPATCHED].value,
];

const ConfirmationNotice = ({ order }) => {
  const { status } = order;

  if (!orderStatusMap[status]) {
    return null;
  }

  const Icon = orderStatusMap[status].icon;

  return (
    <CartPaper>
      <StepsProgress steps={steps} current={orderStatusMap[status].value} />
      <DialogTitleCenter>{`${orderStatusMap[status].title}`}</DialogTitleCenter>

      <DialogContentCenter>
        {Icon && <Icon />}
        <DialogContentText>
          {`${orderStatusMap[status].content}`}
        </DialogContentText>
      </DialogContentCenter>
    </CartPaper>
  );
};

export default ConfirmationNotice;
