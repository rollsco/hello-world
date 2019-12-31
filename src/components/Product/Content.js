import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { currency, multiline } from "../../services/formatter/formatter";
import { AddToCart } from "./AddToCart";
import {
  StyledCardContent,
  StyledCardActions,
  Info,
  Name,
  Price,
  Description,
} from "./components";
import { variants } from "../../data/variants";

const VariantPrice = ({ variantId }) => (
  <Price color="secondary">{currency(variants[variantId].price)}</Price>
);

const Content = ({ product, handleAddToCart }) => (
  <StyledCardContent>
    <Info>
      <Name>{product.name}</Name>
      {product.description && (
        <Description>{multiline(product.description)}</Description>
      )}
      <VariantPrice variantId={product.variants[0]} />
    </Info>

    <StyledCardActions>
      <AddToCart handleAddToCart={handleAddToCart} />
    </StyledCardActions>
  </StyledCardContent>
);

export default Content;
