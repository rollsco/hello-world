import React, { Fragment } from "react";
import styled from "styled-components";
import Product from "../Product/Product";
import { Grid, Toolbar, IconButton, Typography } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";

const Title = styled(Toolbar)`
  padding: 8px 16px 8px;
  text-transform: uppercase;
  background-color: ${props => props.color};
`;

const StyledIconButton = styled(IconButton)`
  transform: rotate(${props => (props["aria-expanded"] ? "0deg" : "180deg")});
  && {
    transition: transform 0.3s;
  }
`;

const Name = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

const Section = ({ section, cart, addToCart, removeFromCart }) => {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Fragment>
      <Grid item xs={12} onClick={handleExpandClick}>
        <Title color={section.color}>
          <StyledIconButton aria-expanded={expanded} aria-label="show more">
            <ExpandMore />
          </StyledIconButton>
          <Name variant="h5">{section.name}</Name>
        </Title>
      </Grid>

      {section.products.map(
        (product, i) =>
          expanded && (
            <Product
              key={i}
              cart={cart}
              product={product}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ),
      )}
    </Fragment>
  );
};

export default Section;
