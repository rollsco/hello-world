import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";

const Product = ({ addToCart, product }) => {
  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <Grid item xs={12} md={6}>
      <ProductCard onClick={handleAddToCart}>
        <Media
          title="asd"
          component="img"
          image={`img/data/${product.image && product.image[0].filename}`}
        />

        <Content product={product} handleAddToCart={handleAddToCart} />
      </ProductCard>
    </Grid>
  );
};

export default Product;
