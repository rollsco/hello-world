import styled from "styled-components";
import { Paper, Box, DialogTitle, DialogContent } from "@material-ui/core";
import Motorcycle from "@material-ui/icons/MotorcycleTwoTone";
import { golden } from "../../theme";

export const DialogTitleCenter = styled(DialogTitle)`
  text-align: center;
`;

export const DialogContentCenter = styled(DialogContent)`
  text-align: center;
`;

export const CartPaper = styled(Paper)`
  margin: 36px 0;
`;

export const Moto = styled(Motorcycle)`
  margin-right: 16px;
  color: ${golden};
  && {
    font-size: 48px;
  }
`;

export const InputIconBox = styled.div`
  margin-left: 12px;
  color: ${golden};
`;

export const CartButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 36px 0;
`;
