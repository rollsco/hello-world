import React from "react";
import LayoutPage from "./LayoutPage";

const initialStateCart = {
  open: false,
  items: [],
};

const getNewCartItem = product => {
  const randomId = Math.floor(Math.random() * 1000000);

  return {
    id: randomId,
    product,
  };
};

const LayoutContainer = () => {
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));
  const [cart, setCart] = React.useState(
    localStorageCart ? localStorageCart : initialStateCart,
  );

  function updateCart(cart) {
    setCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function handleOpenCart() {
    setCart({ ...cart, open: true });
  }

  function handleCloseCart() {
    setCart({ ...cart, open: false });
  }

  function addToCart(product) {
    updateCart({
      ...cart,
      items: [...cart.items, getNewCartItem(product)],
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
