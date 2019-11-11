import React from "react";
import {
  LinearProgress,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { CartPaper, DialogTitleCenter } from "./components";

const messagesMap = {
  failed: {
    title: "Hubo un problema con tu pedido : (",
    content: "¡Pero no todo está perdido! puedes hacer tu pedido por WhatsApp.",
  },
  pending: {
    title: "Haciendo tu pedido",
    content: "",
  },
  requested: {
    title: "Pedido enviado.",
    content: "En breve empezaremos a cocinarlo.",
  },
  accepted: {
    title: "¡Tu pedido fue recibido!",
    content:
      "Lo estamos preparando y pronto saldrá para tu casa. Este mensaje te avisará cuando salga.",
  },
  dispatched: {
    title: "¡Tu pedido está en camino!",
    content: "Ya salió de nuestra cocina y va directo hacia tí.",
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

      <DialogTitleCenter>{`${messagesMap[status].title}`}</DialogTitleCenter>

      <DialogContent>
        <DialogContentText>
          {`${messagesMap[status].content}`}
        </DialogContentText>
      </DialogContent>
    </CartPaper>
  );
};

export default ConfirmationNotice;
