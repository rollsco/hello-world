import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Container } from "@material-ui/core";

const MuiContainer = styled(Container)`
  padding: 16px 0 80px;
`;

const Section = ({ section, cart, addToCart, removeFromCart }) => (
  <MuiContainer maxWidth="lg">
    <Grid container spacing={3}>
      {section.products.map(
        (product, i) =>
          true && (
            <Product
              key={i}
              cart={cart}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ),
      )}
    </Grid>
  </MuiContainer>
);

export default Section;
