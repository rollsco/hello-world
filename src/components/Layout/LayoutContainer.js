import React, { useState } from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";

const createNewCartItem = product => {
  const randomId = Math.floor(Math.random() * 1000000);
  const newProduct = { ...product };

  delete newProduct.img;
  delete newProduct.order;
  delete newProduct.description;

  return {
    id: randomId,
    product: newProduct,
  };
};

const initialStateCart = {
  items: [],
  open: false,
};

const LayoutContainer = () => {
  const [cart, setCart] = useState(
    getLocalStorageItem("cart", initialStateCart),
  );

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

  function addToCart(product) {
    updateCart({
      ...cart,
      items: [...cart.items, createNewCartItem(product)],
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
