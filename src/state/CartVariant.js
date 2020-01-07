import { variants } from "../data/variants";
import { products } from "../data/products";

export const getNewCartVariant = variantId => {
  if (!variantId) {
    return;
  }

  const variant = variants[variantId];
  const product = products[variant.product];
  const name = variant.name ? `${product.name}, ${variant.name}` : product.name;

  return {
    id: variant.id,
    name,
    units: `${variant.amount} ${variant.unit}`,
    price: variant.price,
  };
};
