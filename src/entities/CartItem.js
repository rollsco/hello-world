import { getNewCartVariant } from "./CartVariant";

export const getInitialStateVariantIds = product => ({
  itemId: null,
  main: product.variants[0],
  drink: null,
  extras: [],
});

export const getNewCartItem = variantIds => {
  const randomId = Math.floor(Math.random() * 1000000);
  const { main, drink, extras } = variantIds;
  const mainVariant = getNewCartVariant(main);
  const drinkVariant = getNewCartVariant(drink);
  const extraVariants = [];

  return {
    id: randomId,
    variantIds: { ...variantIds, itemId: randomId }, // Needed to Edit the item
    main: mainVariant,
    drink: drinkVariant,
    extras: extraVariants,
    totalPrice: getCartTotalPrice([
      mainVariant,
      drinkVariant,
      ...extraVariants,
    ]),
  };
};

const getCartTotalPrice = variants =>
  variants.reduce((sum, variant) => (variant ? sum + variant.price : sum), 0);
