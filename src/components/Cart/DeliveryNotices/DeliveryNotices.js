import React, { Fragment } from "react";
import { DialogTitleCenter } from "../components";
import DeliveryNotice from "./DeliveryNotice";
import { Dialog, Button, DialogActions } from "@material-ui/core";
import { DialogPaper } from "../../UI/FullscreenDialog/components";

const DeliveryNotices = ({ orderAndActions, isOpenDeliveryNotice }) => (
  <Fragment>
    <DialogPaper>
      <DeliveryNotice />
    </DialogPaper>

    <Dialog open={isOpenDeliveryNotice}>
      <DialogTitleCenter>Recuerda</DialogTitleCenter>

      <DeliveryNotice />
      <DialogActions>
        <Button variant="contained" onClick={orderAndActions.request}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </Fragment>
);

export default DeliveryNotices;
