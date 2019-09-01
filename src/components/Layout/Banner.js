import React from "react";
import styled from "styled-components";
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core";

const Title = styled(Typography)`
  flex-grow: 1;
  text-transform: uppercase;
`;

const Banner = () => (
  <AppBar position="static">
    <Toolbar>
      <Title variant="h5">Rolls Co</Title>
      <img src="img/whatsapp-icon.svg" width="24px" alt="whatsapp-icon" />
      <Typography variant="h5">
        {process.env.REACT_APP_SUPPORT_TELEPHONE_NUMBER}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Banner;
