import React from "react";
import styled from "styled-components";
import { CardContent, Typography } from "@material-ui/core";
import { OverflowWrapTypography } from "../components";
import { currency } from "../../services/formatter";

const Name = styled(OverflowWrapTypography)`
  && {
    line-height: 1.1em;
    margin-bottom: 3px;
  }
  text-transform: capitalize;
`;

const PriceAndUnits = styled(Typography)`
  && {
    line-height: 1.2em;
  }
`;

const Units = styled(Typography)`
  && {
    x-line-height: 0em;
  }
  white-space: nowrap;
`;

const Content = ({ product }) => (
  <CardContent>
    <Name variant="subtitle2">{product.name}</Name>
    <PriceAndUnits variant="subtitle1" color="secondary">
      {currency(product.price)} ·{" "}
      <Units variant="caption" color="textPrimary">
        {product.pieces} piezas
      </Units>
    </PriceAndUnits>
  </CardContent>
);

export default Content;
