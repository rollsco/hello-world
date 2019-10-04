import React from "react";
import {
  DialogTitle,
  LinearProgress,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { CartPaper } from "./components";

const messagesMap = {
  failed: {
    title: "Hubo un problema con tu pedido : (",
    content:
      "La aplicación no pudo enviar la órden a través de nuestro robot. Pero no todo está perdido: puedes hacer tu pedido por WhatsApp.",
  },
  rejected: {
    title: "Hubo un problema con tu pedido : (",
    content:
      "La aplicación no pudo enviar la órden a través de nuestro robot. Pero no todo está perdido: puedes hacer tu pedido por WhatsApp.",
  },
  pending: {
    title: "Haciendo tu pedido",
    content: "",
  },
  confirmed: {
    title: "¡Tu pedido fue recibido!",
    content: "Te avisaremos por WhatsApp cuando salga para tu casa.",
  },
};

const ConfirmationNotice = ({ order, acceptOrder }) => {
  const { status } = order;

  if (!messagesMap[status]) {
    return null;
  }

  return (
    <CartPaper>
      {["pending"].includes(status) && (
        <LinearProgress variant="query" color="secondary" />
      )}

      <DialogTitle>{`${messagesMap[status].title}`}</DialogTitle>

      <DialogContent>
        <DialogContentText>
          {`${messagesMap[status].content}`}
        </DialogContentText>
      </DialogContent>
      {!["pending", "confirmed"].includes(status) && (
        <DialogActions>
          <Button onClick={acceptOrder}>OK</Button>
        </DialogActions>
      )}
    </CartPaper>
  );
};

export default ConfirmationNotice;
