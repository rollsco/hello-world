import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProductsContainer from "../Products";
import Footer from "./Footer";
import { CssBaseline, Container } from "@material-ui/core";

const Products = styled(Container)`
  padding: 96px 0 96px;
`;

const LayoutPage = ({ loading }) => (
  <CssBaseline>
    <Header />

    <Products maxWidth="lg">
      <ProductsContainer />
    </Products>

    <Footer />
  </CssBaseline>
);

export default LayoutPage;
