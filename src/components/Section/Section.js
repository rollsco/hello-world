import React from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Container, Card, Button } from "@material-ui/core";
import { products } from "../../data/products";
import { selectOrderedObjects } from "../../services/data/selectors";
import { parameters } from "../../data/parameters";
import { Media } from "../Product/components";

const MuiContainer = styled(Container)`
  padding: 16px 0 80px;
`;

const Promo = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0 32px;
`;

const PromoCard = styled(Card)`
  padding: 16px 24px;
  && {
    display: flex;
    justify-content: right;
  }
`;

const PromoButton = styled(Button)`
  && {
    position: absolute;
    animation-name: tempRemovePromo;
    animation-duration: 2s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

const TempRemovePromo = () => (
  <Promo>
    <PromoButton color="secondary" variant="contained">
      APROVECHA
    </PromoButton>
    <PromoCard>
      <Media
        component="img"
        image={`img/data/${parameters["promo-app"].image &&
          parameters["promo-app"].image[0].filename}`}
      />
    </PromoCard>
  </Promo>
);

const Section = ({ index, value, section, cartAndActions }) => {
  if (index !== value) {
    return null;
  }

  const sectionProducts = selectOrderedObjects(section.products, products);

  return (
    <MuiContainer maxWidth="md">
      {index === 0 && <TempRemovePromo />}
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
