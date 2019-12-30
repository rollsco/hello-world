import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Container } from "@material-ui/core";
import { products } from "../../data/products";

const MuiContainer = styled(Container)`
  padding: 16px 0 80px;
`;

const Section = ({ section, cart, addToCart, removeFromCart }) => (
  <MuiContainer maxWidth="lg">
    <Grid container spacing={3}>
      {section.products &&
        section.products.map((productId, i) => (
          <Product
            key={i}
            cart={cart}
            product={products[productId]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
    </Grid>
  </MuiContainer>
);

export default Section;
