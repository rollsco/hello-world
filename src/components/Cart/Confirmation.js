import React, { Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  LinearProgress,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

const titleMap = {
  pending: "Confirmando tu pedido",
  confirmed: "¡Tu pedido ha sido confirmado!",
};

const Confirmation = ({ order, acceptOrder }) => {
  const { status } = order;

  return (
    <Dialog open={["pending", "confirmed"].includes(status)}>
      {["pending"].includes(status) && (
        <LinearProgress variant="query" color="secondary" />
      )}

      <DialogTitle>{titleMap[status]}</DialogTitle>

      {["confirmed"].includes(status) && (
        <Fragment>
          <DialogContent>
            <DialogContentText>
              Te avisaremos por WhatsApp cuando salga para tu casa.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={acceptOrder}>OK</Button>
          </DialogActions>
        </Fragment>
      )}
    </Dialog>
  );
};

export default Confirmation;
