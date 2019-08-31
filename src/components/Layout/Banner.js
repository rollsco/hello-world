import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  font-family: "Montserrat";
  font-size: 27px;
  font-weight: bold;
`;

const Banner = () => (
  <StyledBanner>
    {" "}
    <img src="img/whatsapp-icon.svg" width="24px" />{" "}
    {process.env.REACT_APP_SUPPORT_TELEPHONE_NUMBER}
  </StyledBanner>
);

export default Banner;
