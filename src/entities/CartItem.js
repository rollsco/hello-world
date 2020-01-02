import { getNewCartVariant } from "./CartVariant";

export const getNewCartItem = variantIds => {
  const { main, drink, extras } = variantIds;
  const randomId = Math.floor(Math.random() * 1000000);
  const mainVariant = getNewCartVariant(main);
  const drinkVariant = getNewCartVariant(drink);
  const extraVariants = [];

  return {
    id: randomId,
    variantIds: variantIds, // Needed to Edit the item
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
