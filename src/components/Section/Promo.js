import React from "react";
import styled from "styled-components";
import { parameters } from "../../data/parameters";
import { Card, CardMedia, Button } from "@material-ui/core";

const promoImages = parameters["promo"].images;
const randomImage = Math.floor(Math.random() * promoImages.length);
const promoImageFilename = promoImages[randomImage].filename;

const PromoSpace = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0 32px;
`;

const PromoCard = styled(Card)`
  && {
    display: flex;
    justify-content: right;
  }
`;

const PromoMedia = styled(CardMedia)`
  && {
    max-height: 180px;
  }
`;

const PromoButton = styled(Button)`
  && {
    position: absolute;
    animation-name: tempRemovePromo;
    animation-duration: 1.6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
  }
`;

const Promo = () => (
  <PromoSpace>
    <PromoButton color="secondary" variant="contained">
      APROVECHA
    </PromoButton>
    <PromoCard>
      <PromoMedia component="img" image={`img/data/${promoImageFilename}`} />
    </PromoCard>
  </PromoSpace>
);

export default Promo;
