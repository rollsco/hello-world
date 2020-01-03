import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import Sections from "../Sections/Sections";
import { CssBaseline } from "@material-ui/core";
import CustomizeDialog from "../Product/CustomizeDialog/CustomizeDialog";

const LayoutPage = ({
  cart,
  openCart,
  variantIds,
  updateCart,
  setVariantIds,
}) => (
  <CssBaseline>
    {!cart.open && (
      <Fragment>
        <Header openCart={openCart} productsNumber={cart.items.length} />

        <Sections setVariantIds={setVariantIds} />

        {cart.items.length > 0 && <Footer openCart={openCart} />}
      </Fragment>
    )}

    {cart.open && (
      <CartContainer
        cart={cart}
        updateCart={updateCart}
        setVariantIds={setVariantIds}
      />
    )}

    {variantIds && (
      <CustomizeDialog
        cart={cart}
        updateCart={updateCart}
        variantIds={variantIds}
        setVariantIds={setVariantIds}
      />
    )}
  </CssBaseline>
);

export default LayoutPage;
