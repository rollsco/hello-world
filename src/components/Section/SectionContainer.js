import React, { useState } from "react";
import Section from "./Section";

const SectionContainer = ({
  section,
  index,
  value,
  cart,
  variantIds,
  setVariantIds,
  addToCart,
  removeFromCart,
}) => {
  const [loading, setLoading] = useState(true);

  // onMount
  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (index !== value) {
    return null;
  }

  return (
    <Section
      cart={cart}
      section={section}
      loading={loading}
      variantIds={variantIds}
      setVariantIds={setVariantIds}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

export default SectionContainer;
