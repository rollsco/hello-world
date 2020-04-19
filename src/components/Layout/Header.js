import React from "react";
import { AppBar, Badge, IconButton } from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { StyledToolbar, ImageLink, ImageInLink } from "./components";

const Header = ({ cartAndActions }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <img
        height="32px"
        src="img/generic-logo-dark-270-51.png"
        alt="Rolls.co logo"
      />

      <IconButton onClick={cartAndActions.open}>
        <Badge
          badgeContent={cartAndActions.cart.items.length}
          color="secondary"
        >
          <ShoppingCart />
        </Badge>
      </IconButton>

      {/* <ImageLink
        href="http://api.whatsapp.com/send?phone=573174122919"
        target="__blank"
      >
        <ImageInLink
          src="img/contacto-whatsapp-small.png"
          alt="Contacto whatsapp"
        />
      </ImageLink> */}
    </StyledToolbar>
  </AppBar>
);

export default Header;
