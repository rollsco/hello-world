import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage/localStorage";
import { getNewCartItem } from "../../entities/CartItem";

const initialStateCart = {
  items: [],
  open: false,
};

const LayoutContainer = () => {
  const [cart, setCart] = useState(
    getLocalStorageItem("cart", initialStateCart),
  );
  console.log("--cart", cart);

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

  function addToCart(variantIds) {
    updateCart({
      ...cart,
      items: [...cart.items, getNewCartItem(variantIds)],
    });
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
      openCart={openCart}
      closeCart={closeCart}
      addToCart={addToCart}
      clearCart={clearCart}
      removeFromCart={removeFromCart}
    />
  );
};

export default LayoutContainer;
