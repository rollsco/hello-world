import React from "react";
import LayoutPage from "./LayoutPage";

const initialStateCart = {
  open: true,
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
  const [cart, setCart] = React.useState(initialStateCart);

  function handleOpenCart() {
    setCart({ ...cart, open: true });
  }

  function handleCloseCart() {
    setCart({ ...cart, open: false });
  }

  function addToCart(product) {
    setCart({
      ...cart,
      items: [...cart.items, getNewCartItem(product)],
    });
  }

  function removeFromCart(itemToRemove) {
    const items = cart.items.filter(item => item.id != itemToRemove.id);

    setCart({
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
