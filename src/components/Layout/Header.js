import React from "react";
import styled from "styled-components";
import { Typography, AppBar, Toolbar } from "@material-ui/core";

const Title = styled(Typography)`
  flex-grow: 1;
  text-transform: uppercase;
`;

const WhatsappIcon = styled.img`
  margin-right: 8px;
`;

const PhoneNumber = styled(Typography)`
  padding-bottom: 5px;
`;

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Title variant="h5">Rolls Co</Title>
      <WhatsappIcon
        src="img/whatsapp-icon.svg"
        width="26px"
        alt="whatsapp-icon"
      />
      <PhoneNumber variant="h5">
        {process.env.REACT_APP_SUPPORT_TELEPHONE_NUMBER}
      </PhoneNumber>
    </Toolbar>
  </AppBar>
);

export default Header;
