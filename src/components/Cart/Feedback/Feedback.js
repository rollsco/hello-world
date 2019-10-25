import React from "react";
import styled from "styled-components";
import { TextField, Typography } from "@material-ui/core";
import {
  CartPaper,
  DialogTitleCenter,
  DialogContentCenter,
} from "../components";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

const StyledStar = styled(Star)`
  cursor: pointer;
`;

const StyledStarBorder = styled(StarBorder)`
  cursor: pointer;
`;

const RatingStar = ({ full, handleClick }) =>
  full ? (
    <StyledStar fontSize="large" onClick={handleClick} />
  ) : (
    <StyledStarBorder fontSize="large" onClick={handleClick} />
  );

const Feedback = ({ order, rateOrder, commentOrder }) => {
  if (!order.status) {
    return null;
  }

  let timeoutId = 0;

  const handleChange = ({ target }) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      commentOrder(target.value);
    }, 1000);
  };

  return (
    <CartPaper>
      <DialogTitleCenter>¿Cómo te pareció nuestra App?</DialogTitleCenter>

      <DialogContentCenter>
        {[1, 2, 3, 4, 5].map(index => (
          <RatingStar
            key={index}
            full={index <= order.rating}
            handleClick={() => rateOrder(index)}
          />
        ))}
      </DialogContentCenter>

      {order.rating && (
        <DialogContentCenter>
          <Typography variant="h6">¡Gracias por tu calificación!</Typography>
          <Typography variant="caption">
            Saber qué piensas es muy valioso para nostoros. Si tienes más
            comentarios, escribe y los leeremos.
          </Typography>

          <TextField
            rows={2}
            rowsMax={4}
            fullWidth
            multiline
            margin="dense"
            variant="filled"
            label="Comentarios"
            name="ratingComments"
            onChange={handleChange}
          />
        </DialogContentCenter>
      )}
    </CartPaper>
  );
};

export default Feedback;
