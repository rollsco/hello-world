import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";
import { getInitialStateVariantIds } from "../../entities/CartItem";

const Product = ({ product, setVariantIds }) => {
  const handleOpenCustomizeDialog = () => {
    setVariantIds(getInitialStateVariantIds(product));
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
