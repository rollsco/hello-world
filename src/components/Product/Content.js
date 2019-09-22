import React from "react";
import styled from "styled-components";
import { CardHeader, CardContent, IconButton } from "@material-ui/core";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import { currency } from "../../services/formatter";

const StyledCardHeader = styled(CardHeader)`
  text-transform: capitalize;
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

const ProductPhoto = styled.img`
  margin: 8px 0;
  width: 100%;
`;

const ColourCircle = styled(IconButton)`
  && {
    background-color: ${props => props.backgroundcolor};
  }
`;

const Content = ({ product, color }) => (
  <StyledCardContent>
    <StyledCardHeader
      avatar={
        <ColourCircle backgroundcolor={color}>
          <FiberManualRecord />
        </ColourCircle>
      }
      title={product.name}
      subheader={currency(product.price)}
    />
    <ProductPhoto src={`https://source.unsplash.com/${product.img}/300x150`} />
  </StyledCardContent>
);

export default Content;
