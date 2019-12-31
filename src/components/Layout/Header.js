import React from "react";
import { AppBar, Badge, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { StyledToolbar, ImageLink, ImageInLink } from "./components";

const Header = ({ productsNumber, openCart }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img src="img/logo-rolls-small.png" alt="Rolls.co logo" />

      <IconButton onClick={openCart}>
        <Badge badgeContent={productsNumber} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <ImageLink
        href="http://api.whatsapp.com/send?phone=573174122919"
        target="__blank"
      >
        <ImageInLink
          src="img/contacto-whatsapp-small.png"
          alt="Contacto whatsapp"
        />
      </ImageLink>
    </StyledToolbar>
  </AppBar>
);

export default Header;
