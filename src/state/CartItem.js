import { getNewCartVariant } from "./CartVariant";

export const getInitialStateVariantIds = product => ({
  itemId: null,
  main: product.variants[0],
  extras: [],
});

export const getNewCartItem = variantIds => {
  const randomId = Math.floor(Math.random() * 1000000);
  const { main, extras } = variantIds;
  const mainVariant = getNewCartVariant(main);
  const extraVariants = [];

  return {
    id: randomId,
    variantIds: { ...variantIds, itemId: randomId }, // Needed to Edit the item
    main: mainVariant,
    extras: extraVariants,
    totalPrice: getCartTotalPrice([
      mainVariant,
      ...extraVariants,
    ]),
  };
};

const getCartTotalPrice = variants =>
  variants.reduce((sum, variant) => (variant ? sum + variant.price : sum), 0);
