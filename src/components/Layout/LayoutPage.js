import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartContainer from "../Cart";
import Sections from "../Sections/Sections";
import { CssBaseline } from "@material-ui/core";
import CustomizeItem from "../Cart/CustomizeItem/CustomizeItem";

const LayoutPage = ({ cartAndActions }) => (
  <CssBaseline>
    {!cartAndActions.cart.open && (
      <Fragment>
        <Header cartAndActions={cartAndActions} />

        <Sections cartAndActions={cartAndActions} />

        {cartAndActions.cart.items.length > 0 && (
          <Footer cartAndActions={cartAndActions} />
        )}
      </Fragment>
    )}

    {cartAndActions.cart.open && (
      <CartContainer cartAndActions={cartAndActions} />
    )}

    {cartAndActions.cart.customizingItem && (
      <CustomizeItem cartAndActions={cartAndActions} />
    )}
  </CssBaseline>
);

export default LayoutPage;
