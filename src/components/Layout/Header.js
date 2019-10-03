import React from "react";
import styled from "styled-components";
import {
  Typography,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const WhatsappIcon = styled.img`
  margin-right: 8px;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Header = ({ productsNumber, handleOpenCart }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img src="img/logo-rolls-small.png" />

      <IconButton onClick={handleOpenCart} aria-label="cart">
        <Badge badgeContent={productsNumber} color="se E condary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <Typography variant="h5">
        <WhatsappIcon src="img/whatsapp-logo.svg" width="32px" alt="WhatsApp" />
        {process.env.REACT_APP_SUPPORT_TELEPHONE_NUMBER}
      </Typography>
    </StyledToolbar>
  </AppBar>
);

export default Header;
