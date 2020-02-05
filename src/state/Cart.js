import { setLocalStorageItem } from "../services/localStorage/localStorage";
import { getCartItemId } from "./CartItem";

export const initialStateCart = {
  items: [],
  open: false,
  customizingItem: null,
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

  const setCustomizingItem = cartItem => {
    updateCart({
      ...cart,
      customizingItem: cartItem,
    });
  };

  const upsertItem = cartItem => {
    if (!cartItem.id) {
      const newCartItem = { ...cartItem, id: getCartItemId() };

      updateCart({
        ...cart,
        items: [...cart.items, newCartItem],
        customizingItem: null,
      });
    } else {
      const itemsExceptUpdated = cart.items.filter(
        item => item.id !== cartItem.id,
      );

      updateCart({
        ...cart,
        items: [...itemsExceptUpdated, cartItem],
        customizingItem: null,
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
    setCustomizingItem,
  };
};
