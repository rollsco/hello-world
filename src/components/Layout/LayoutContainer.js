import React from "react";
import LayoutPage from "./LayoutPage";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";

const createIdempotencyToken = () => {
  let token = "";
  const length = 24;
  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";
  for (var i = length; i > 0; --i) {
    token += characters[parseInt(Math.random() * characters.length)];
  }

  return token;
};

const createNewCartItem = product => {
  const randomId = Math.floor(Math.random() * 1000000);

  return {
    id: randomId,
    product,
  };
};

const initialStateCart = {
  items: [],
  open: false,
  idempotencyToken: createIdempotencyToken(),
};

const LayoutContainer = () => {
  const [cart, setCart] = React.useState(
    getLocalStorageItem("cart", initialStateCart),
  );

  function updateCart(cart) {
    setCart(cart);
    setLocalStorageItem("cart", cart);
  }

  function handleOpenCart() {
    updateCart({ ...cart, open: true });
  }

  function handleCloseCart() {
    updateCart({ ...cart, open: false });
  }

  function addToCart(product) {
    updateCart({
      ...cart,
      items: [...cart.items, createNewCartItem(product)],
    });
  }

  function removeFromCart(itemToRemove) {
    const items = cart.items.filter(item => item.id != itemToRemove.id);

    updateCart({
      ...cart,
      items,
    });
  }

  return (
    <LayoutPage
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      handleOpenCart={handleOpenCart}
      handleCloseCart={handleCloseCart}
    />
  );
};

export default LayoutContainer;
