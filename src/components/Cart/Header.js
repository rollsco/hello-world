import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Header = ({ handleCloseCart }) => (
  <AppBar>
    <StyledToolbar>
      <Typography variant="h5">Tu pedido:</Typography>

      <IconButton onClick={handleCloseCart} aria-label="close">
        <Close />
      </IconButton>
    </StyledToolbar>
  </AppBar>
);

export default Header;
