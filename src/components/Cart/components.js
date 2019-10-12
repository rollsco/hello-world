import styled from "styled-components";
import { Paper, Box } from "@material-ui/core";
import Motorcycle from "@material-ui/icons/MotorcycleTwoTone";
import { golden } from "../../theme";

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
