import React from "react";
import styled from "styled-components";
import { Toolbar, IconButton, Button, Paper } from "@material-ui/core";
import LocalDining from "@material-ui/icons/LocalDining";
import LocalCafe from "@material-ui/icons/LocalCafe";

const StyledDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const BottomToolbar = styled(Paper)`
  display: flex;
  justify-content: center;
  padding: 12px 0;
  && {
    border-radius: 0;
  }
`;

const Footer = () => (
  <StyledDiv>
    <BottomToolbar>
      <IconButton>
        <LocalCafe />
      </IconButton>
      <Button variant="contained" color="secondary">
        ¡Haz tu pedido!
      </Button>
      <IconButton>
        <LocalDining />
      </IconButton>
    </BottomToolbar>
  </StyledDiv>
);

export default Footer;
