import React from "react";
import styled from "styled-components";
import { TextField, Typography } from "@material-ui/core";
import { DialogTitleCenter, DialogContentCenter } from "../components";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { DialogPaper } from "../../UI/FullscreenDialog/components";

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

const Feedback = ({ orderAndActions }) => {
  if (!orderAndActions.order.status) {
    return null;
  }

  let timeoutId = 0;

  const handleChange = ({ target }) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      orderAndActions.comment(target.value);
    }, 1000);
  };

  return (
    <DialogPaper>
      <DialogTitleCenter>¿Cómo te pareció nuestra App?</DialogTitleCenter>

      <DialogContentCenter>
        {[1, 2, 3, 4, 5].map(index => (
          <RatingStar
            key={index}
            full={index <= orderAndActions.order.rating}
            handleClick={() => orderAndActions.rate(index)}
          />
        ))}
      </DialogContentCenter>

      {orderAndActions.order.rating && (
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
    </DialogPaper>
  );
};

export default Feedback;
