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

const Title = styled(Typography)`
  text-transform: uppercase;
`;

const WhatsappIcon = styled.img`
  margin-right: 8px;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const Header = ({ productsNumber, handleOpenCart }) => (
  <AppBar position="fixed">
    <StyledToolbar>
      <Title variant="h5">Rolls Co</Title>

      <IconButton onClick={handleOpenCart} aria-label="cart">
        <Badge badgeContent={productsNumber} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      <Typography variant="h5">
        <WhatsappIcon
          src="img/whatsapp-icon.svg"
          width="26px"
          alt="whatsapp-icon"
        />
        {process.env.REACT_APP_SUPPORT_TELEPHONE_NUMBER}
      </Typography>
    </StyledToolbar>
  </AppBar>
);

export default Header;
