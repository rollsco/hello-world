import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import Sections from "../Sections/Sections";
import { CssBaseline } from "@material-ui/core";
import CustomizeDialog from "../Product/CustomizeDialog/CustomizeDialog";

const LayoutPage = ({
  cart,
  setCart,
  openCart,
  closeCart,
  clearCart,
  variantIds,
  setVariantIds,
  removeFromCart,
}) => (
  <CssBaseline>
    {!cart.open && (
      <Fragment>
        <Header openCart={openCart} productsNumber={cart.items.length} />

        <Sections
          cart={cart}
          // setCart={setCart}
          variantIds={variantIds}
          setVariantIds={setVariantIds}
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

    {variantIds && (
      <CustomizeDialog
        cart={cart}
        setCart={setCart}
        variantIds={variantIds}
        setVariantIds={setVariantIds}
      />
    )}
  </CssBaseline>
);

export default LayoutPage;
