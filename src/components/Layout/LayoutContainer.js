import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import { getLocalStorageItem } from "../../services/localStorage/localStorage";
import { getCartAndActions, initialStateCart } from "../../state/Cart";

const LayoutContainer = () => {
  const cartAndSet = useState(getLocalStorageItem("cart", initialStateCart));
  const cartAndActions = getCartAndActions(cartAndSet);

  return <LayoutPage cartAndActions={cartAndActions} />;
};

export default LayoutContainer;
