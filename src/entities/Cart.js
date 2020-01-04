import { setLocalStorageItem } from "../services/localStorage/localStorage";
import { getNewCartItem } from "./CartItem";

export const initialStateCart = {
  items: [],
  open: false,
};

export const getCartAndActions = cartAndSet => {
  const [cart, setCart] = cartAndSet;

  const updateCart = cart => {
    setCart(cart);
    setLocalStorageItem("cart", cart);
  };

  const open = () => {
    updateCart({ ...cart, open: cart.items.length > 0 });
  };

  const close = () => {
    updateCart({ ...cart, open: false });
  };

  const clear = () => {
    updateCart(initialStateCart);
  };

  const removeItem = itemToRemove => {
    const items = cart.items.filter(item => item.id !== itemToRemove.id);

    if (items.length === 0) {
      cart.open = false;
    }

    updateCart({
      ...cart,
      items,
    });
  };

  const upsertItem = variantIds => {
    if (!variantIds.itemId) {
      updateCart({
        ...cart,
        items: [...cart.items, getNewCartItem(variantIds)],
      });
    } else {
      const newItems = cart.items.filter(item => item.id !== variantIds.itemId);
      updateCart({
        ...cart,
        items: [...newItems, getNewCartItem(variantIds)],
      });
    }
  };

  return {
    cart,
    open,
    close,
    clear,
    upsertItem,
    removeItem,
  };
};
