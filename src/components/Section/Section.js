import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Container } from "@material-ui/core";
import { products } from "../../data/products";

const MuiContainer = styled(Container)`
  padding: 16px 0 80px;
`;

const Section = ({ section, addToCart, removeFromCart }) => (
  <MuiContainer maxWidth="md">
    <Grid container justify="center" spacing={4}>
      {section.products &&
        section.products.map((productId, i) => (
          <Product
            key={i}
            product={products[productId]}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
    </Grid>
  </MuiContainer>
);

export default Section;
