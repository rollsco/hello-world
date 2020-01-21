import React from "react";
import { DialogContentText } from "@material-ui/core";
import { DialogTitleCenter, DialogContentCenter } from "../components";
import {
  orderStatusMap,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_ACCEPTED,
  ORDER_STATUS_REQUESTED,
  ORDER_STATUS_DISPATCHED,
} from "./orderStatusMap";
import { StepsProgress } from "../../UI/StepsProgress";
import { DialogPaper } from "../../UI/FullscreenDialog/components";

const steps = [
  orderStatusMap[ORDER_STATUS_PENDING].value,
  orderStatusMap[ORDER_STATUS_REQUESTED].value,
  orderStatusMap[ORDER_STATUS_ACCEPTED].value,
  orderStatusMap[ORDER_STATUS_DISPATCHED].value,
];

const ConfirmationNotice = ({ orderAndActions }) => {
  const { status } = orderAndActions.order;

  if (!orderStatusMap[status]) {
    return null;
  }

  const Icon = orderStatusMap[status].icon;

  return (
    <DialogPaper>
      <StepsProgress steps={steps} current={orderStatusMap[status].value} />
      <DialogTitleCenter>{`${orderStatusMap[status].title}`}</DialogTitleCenter>

      <DialogContentCenter>
        {Icon && <Icon />}
        <DialogContentText>
          {`${orderStatusMap[status].content}`}
        </DialogContentText>
      </DialogContentCenter>
    </DialogPaper>
  );
};

export default ConfirmationNotice;
