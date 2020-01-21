import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import Sections from "../Sections/Sections";
import { CssBaseline } from "@material-ui/core";
import CustomizeItem from "../Cart/CustomizeItem/CustomizeItem";

const LayoutPage = ({ variantIds, setVariantIds, cartAndActions }) => (
  <CssBaseline>
    {!cartAndActions.cart.open && (
      <Fragment>
        <Header cartAndActions={cartAndActions} />

        <Sections setVariantIds={setVariantIds} />

        {cartAndActions.cart.items.length > 0 && (
          <Footer cartAndActions={cartAndActions} />
        )}
      </Fragment>
    )}

    {cartAndActions.cart.open && (
      <CartContainer
        setVariantIds={setVariantIds}
        cartAndActions={cartAndActions}
      />
    )}

    {variantIds && (
      <CustomizeItem
        variantIds={variantIds}
        setVariantIds={setVariantIds}
        cartAndActions={cartAndActions}
      />
    )}
  </CssBaseline>
);

export default LayoutPage;
