import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import { ProductCard, Media } from "./components";
import CustomizeDialog from "./CustomizeDialog/CustomizeDialog";

const Product = ({ addToCart, product }) => {
  const initialStateVariantIds = {
    main: product.variants[0],
    drink: null,
    extras: [],
  };
  const [open, setOpen] = useState(false);
  const [variantIds, setVariantIds] = useState(initialStateVariantIds);

  const handleChangeMain = event => {
    setVariantIds({ ...variantIds, main: event.target.value });
  };

  function handleAddToCart() {
    addToCart(variantIds);
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
          variantIds={variantIds}
          handleClose={() => setOpen(false)}
          handleAddToCart={handleAddToCart}
          handleChangeMain={handleChangeMain}
        />
      )}
    </Grid>
  );
};

export default Product;
