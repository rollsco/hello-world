import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { getNewCart } from "../../entities/Cart";

const LayoutContainer = () => {
  const [cart, setCart] = useState(getLocalStorageItem("cart", getNewCart()));
  const [variantIds, setVariantIds] = useState(null);

  function updateCart(cart) {
    setCart(cart);
    setLocalStorageItem("cart", cart);
  }

  function openCart() {
    updateCart({ ...cart, open: cart.items.length > 0 });
  }

  return (
    <LayoutPage
      cart={cart}
      openCart={openCart}
      updateCart={updateCart}
      variantIds={variantIds}
      setVariantIds={setVariantIds}
    />
  );
};

export default LayoutContainer;
