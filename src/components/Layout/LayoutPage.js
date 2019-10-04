import React, { Fragment } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import ProductsContainer from "../Products";
import { CssBaseline, Container } from "@material-ui/core";

const Products = styled(Container)`
  padding: 96px 0 96px;
`;

const LayoutPage = ({
  cart,
  addToCart,
  clearCart,
  removeFromCart,
  handleOpenCart,
  handleCloseCart,
}) => (
  <CssBaseline>
    {!cart.open && (
      <Fragment>
        <Header
          handleOpenCart={handleOpenCart}
          productsNumber={cart.items.length}
        />

        <Products maxWidth="lg">
          <ProductsContainer
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Products>

        {cart.items.length > 0 && <Footer handleOpenCart={handleOpenCart} />}
      </Fragment>
    )}

    <CartContainer
      cart={cart}
      clearCart={clearCart}
      removeFromCart={removeFromCart}
      handleCloseCart={handleCloseCart}
    />
  </CssBaseline>
);

export default LayoutPage;
