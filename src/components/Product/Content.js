import React from "react";
import styled from "styled-components";
import { CardHeader, CardContent, IconButton } from "@material-ui/core";
import { currency } from "../../services/formatter";

const StyledCardContent = styled(CardContent)`
  && {
    padding: 0;
  }
`;

const StyledCardHeader = styled(CardHeader)`
  text-transform: capitalize;
`;

const ProductPhoto = styled.img`
  margin: 8px 0;
  width: 100%;
`;

const Content = ({ product }) => (
  <StyledCardContent>
    <StyledCardHeader
      title={product.name}
      subheader={currency(product.price)}
    />
    <ProductPhoto src={`https://source.unsplash.com/${product.img}/300x150`} />
  </StyledCardContent>
);

export default Content;
