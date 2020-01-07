import React from "react";
import styled from "styled-components";
import { Button, Paper } from "@material-ui/core";

const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const BottomButtonPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  && {
    border-radius: 0;
  }
`;

const Footer = ({ cartAndActions }) => (
  <FixedBottom>
    <BottomButtonPaper onClick={cartAndActions.open}>
      <Button variant="contained" color="secondary">
        ¡Haz tu pedido!
      </Button>
    </BottomButtonPaper>
  </FixedBottom>
);

export default Footer;
