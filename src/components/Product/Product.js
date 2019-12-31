import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";
import CustomizeDialog from "./CustomizeDialog/CustomizeDialog";

const Product = ({ addToCart, product }) => {
  const [open, setOpen] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setOpen(false);
  }

  return (
    <Grid item xs={12} md={6}>
      <ProductCard onClick={() => setOpen(true)}>
        <Media
          component="img"
          image={`img/data/${product.image && product.image[0].filename}`}
        />

        <Content product={product} handleAddToCart={handleAddToCart} />
      </ProductCard>

      {open && (
        <CustomizeDialog
          open={open}
          product={product}
          handleClose={() => setOpen(false)}
          handleAddToCart={handleAddToCart}
        />
      )}
    </Grid>
  );
};

export default Product;
