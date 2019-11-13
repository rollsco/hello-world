import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import SectionsContainer from "../Sections";
import { CssBaseline } from "@material-ui/core";

const LayoutPage = ({
  cart,
  openCart,
  closeCart,
  addToCart,
  clearCart,
  removeFromCart,
}) => (
  <CssBaseline>
    {!cart.open && (
      <Fragment>
        <Header openCart={openCart} productsNumber={cart.items.length} />

        <SectionsContainer
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        {cart.items.length > 0 && <Footer openCart={openCart} />}
      </Fragment>
    )}

    {cart.open && (
      <CartContainer
        cart={cart}
        closeCart={closeCart}
        clearCart={clearCart}
        removeFromCart={removeFromCart}
      />
    )}
  </CssBaseline>
);

export default LayoutPage;
