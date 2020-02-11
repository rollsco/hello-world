import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Container } from "@material-ui/core";
import { products } from "../../data/products";
import { selectOrderedObjects } from "../../services/data/selectors";
import Promo from "./Promo";

const MuiContainer = styled(Container)`
  padding: 16px 0 80px;
`;

const Section = ({ index, value, section, cartAndActions }) => {
  if (index !== value) {
    return null;
  }

  const sectionProducts = selectOrderedObjects(section.products, products);

  return (
    <MuiContainer maxWidth="md">
      {index === 0 && <Promo />}
      <Grid container justify="center" spacing={4}>
        {sectionProducts &&
          sectionProducts.map((product, i) => (
            <Product
              key={i}
              product={product}
              cartAndActions={cartAndActions}
            />
          ))}
      </Grid>
    </MuiContainer>
  );
};

export default Section;
