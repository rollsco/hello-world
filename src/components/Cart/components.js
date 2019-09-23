import styled from "styled-components";
import { Paper } from "@material-ui/core";
import Motorcycle from "@material-ui/icons/MotorcycleTwoTone";
import { golden } from "../../theme";

export const CartPaper = styled(Paper)`
  margin: 64px 0;
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
