import React from "react";
import styled from "styled-components";
import { AppBar, Toolbar, Badge, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Header = ({ productsNumber, handleOpenCart }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img src="img/logo-rolls-small.png" alt="Rolls.co logo" />

      <IconButton onClick={handleOpenCart} aria-label="cart">
        <Badge badgeContent={productsNumber} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <a
        href="http://api.whatsapp.com/send?phone=573174122919"
        target="__blank"
      >
        <img src="img/contacto-whatsapp-small.png" alt="Contacto whatsapp" />
      </a>
    </StyledToolbar>
  </AppBar>
);

export default Header;
