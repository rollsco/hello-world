import React from "react";
import styled from "styled-components";
import { IconButton, Button } from "@material-ui/core";
import LocalDining from "@material-ui/icons/LocalDining";
import LocalCafe from "@material-ui/icons/LocalCafe";
import { BottomButtonPaper } from "../components";

const FixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = ({ handleOpenCart }) => (
  <FixedBottom>
    <BottomButtonPaper onClick={handleOpenCart}>
      <IconButton>
        <LocalCafe />
      </IconButton>
      <Button variant="contained" color="secondary">
        ¡Haz tu pedido!
      </Button>
      <IconButton>
        <LocalDining />
      </IconButton>
    </BottomButtonPaper>
  </FixedBottom>
);

export default Footer;
