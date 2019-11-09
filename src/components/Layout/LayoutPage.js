import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import SectionsContainer from "../Sections";
import { CssBaseline } from "@material-ui/core";

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

        <SectionsContainer
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        {cart.items.length > 0 && <Footer handleOpenCart={handleOpenCart} />}
      </Fragment>
    )}

    {cart.open && (
      <CartContainer
        cart={cart}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
        handleCloseCart={handleCloseCart}
      />
    )}
  </CssBaseline>
);

export default LayoutPage;
