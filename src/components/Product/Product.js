import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";

const Product = ({ product, setVariantIds }) => {
  const initialStateVariantIds = {
    main: product.variants[0],
    drink: null,
    extras: [],
  };

  const handleOpenCustomizeDialog = () => {
    setVariantIds(initialStateVariantIds);
  };

  return (
    <Grid item xs={12} md={6}>
      <ProductCard onClick={handleOpenCustomizeDialog}>
        <Media
          component="img"
          image={`img/data/${product.image && product.image[0].filename}`}
        />

        <Content product={product} />
      </ProductCard>
    </Grid>
  );
};

export default Product;
