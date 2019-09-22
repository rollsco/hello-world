import React from "react";
import LayoutPage from "./LayoutPage";

const initialStateCart = {
  open: true,
  products: [],
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
      products: [...cart.products, product],
    });
  }

  function removeFromCart(product) {
    setCart({
      ...cart,
      products: [...cart.products, product],
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
