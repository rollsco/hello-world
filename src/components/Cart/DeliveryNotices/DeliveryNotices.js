import React, { Fragment } from "react";
import { CartPaper } from "../components";
import DeliveryNotice from "./DeliveryNotice";
import {
  Dialog,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
} from "@material-ui/core";

const DeliveryNotices = ({ requestOrder, isOpenDeliveryNotice }) => (
  <Fragment>
    <CartPaper>
      <DeliveryNotice />
    </CartPaper>
    <Dialog open={isOpenDeliveryNotice}>
      <DialogTitle>
        <Typography variant="subtitle1" align="center">
          Recuerda
        </Typography>
      </DialogTitle>
      <DeliveryNotice />
      <DialogActions>
        <Button variant="contained" onClick={requestOrder}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
);

export default DeliveryNotices;
