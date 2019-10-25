import React, { Fragment } from "react";
import { CartPaper, DialogTitleCenter } from "../components";
import DeliveryNotice from "./DeliveryNotice";
import { Dialog, Button, DialogActions } from "@material-ui/core";

const DeliveryNotices = ({ requestOrder, isOpenDeliveryNotice }) => (
  <Fragment>
    <CartPaper>
      <DeliveryNotice />
    </CartPaper>
    <Dialog open={isOpenDeliveryNotice}>
      <DialogTitleCenter>Recuerda</DialogTitleCenter>

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
