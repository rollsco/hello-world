import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProductsContainer from "../Products";
import Footer from "./Footer";
import CartContainer from "../Cart";
import { CssBaseline, Container } from "@material-ui/core";

const Products = styled(Container)`
  padding: 96px 0 96px;
`;

const LayoutPage = ({
  cart,
  loading,
  addToCart,
  removeFromCart,
  handleOpenCart,
  handleCloseCart,
}) => (
  <CssBaseline>
    <Header productsNumber={cart.products.length} />

    <Products maxWidth="lg">
      <ProductsContainer addToCart={addToCart} />
    </Products>

    <Footer handleOpenCart={handleOpenCart} />

    <CartContainer
      cart={cart}
      handleCloseCart={handleCloseCart}
      removeFromCart={removeFromCart}
    />
  </CssBaseline>
);

export default LayoutPage;
