import React, { Fragment } from "react";
import Banner from "./Banner";
import Container from "@material-ui/core/Container";
import ProductsContainer from "../Products";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";

const StyledContainer = styled(Container)`
  padding: 40px 0;
`;

const LayoutPage = ({ loading }) => (
  <CssBaseline>
    <Banner />
    <StyledContainer maxWidth="lg">
      <ProductsContainer />
    </StyledContainer>
    <Banner />
  </CssBaseline>
);

export default LayoutPage;
