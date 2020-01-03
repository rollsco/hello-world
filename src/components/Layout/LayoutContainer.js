import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { getCartAndActions, initialStateCart } from "../../entities/Cart";

const LayoutContainer = () => {
  const cartAndSet = useState(getLocalStorageItem("cart", initialStateCart));
  const cartAndActions = getCartAndActions(cartAndSet);
  const [variantIds, setVariantIds] = useState(null);

  return (
    <LayoutPage
      variantIds={variantIds}
      setVariantIds={setVariantIds}
      cartAndActions={cartAndActions}
    />
  );
};

export default LayoutContainer;
