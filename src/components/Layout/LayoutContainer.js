import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";

const initialStateCart = {
  items: [],
  open: false,
};

const LayoutContainer = () => {
  const [cart, setCart] = useState(
    getLocalStorageItem("cart", initialStateCart),
  );
  const [variantIds, setVariantIds] = useState(null);

  function updateCart(cart) {
    setCart(cart);
    setLocalStorageItem("cart", cart);
  }

  function openCart() {
    updateCart({ ...cart, open: cart.items.length > 0 });
  }

  function closeCart() {
    updateCart({ ...cart, open: false });
  }

  function removeFromCart(itemToRemove) {
    const items = cart.items.filter(item => item.id !== itemToRemove.id);

    if (items.length === 0) {
      cart.open = false;
    }

    updateCart({
      ...cart,
      items,
    });
  }

  function clearCart() {
    updateCart(initialStateCart);
  }

  return (
    <LayoutPage
      cart={cart}
      setCart={setCart}
      openCart={openCart}
      closeCart={closeCart}
      clearCart={clearCart}
      variantIds={variantIds}
      setVariantIds={setVariantIds}
      removeFromCart={removeFromCart}
    />
  );
};

export default LayoutContainer;
