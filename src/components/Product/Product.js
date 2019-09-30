import React from "react";
import styled from "styled-components";
import { AddToCart } from "./AddToCart";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Badge,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Favorite from "@material-ui/icons/Favorite";
import Content from "./Content";
import { multiline } from "../../services/formatter";

const StyledCard = styled(Card)`
  margin: 0 auto;
`;

const StyledCardActions = styled(CardActions)`
  justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
  && {
    transform: rotate(${props => (props["aria-expanded"] ? "180deg" : "0deg")});
    transition: transform 0.3s;
  }
`;

const getNumberOnCart = (id, cart) =>
  cart.items.reduce(
    (accumulator, item) =>
      item.product.id === id ? accumulator + 1 : accumulator,
    0,
  );

const Product = ({ cart, addToCart, removeFromCart, product }) => {
  const numberOnCart = getNumberOnCart(product.id, cart);
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleAddToCart() {
    addToCart(product);
  }

  function handleRemoveFromCart() {
    removeFromCart(
      cart.items.filter(item => item.product.id === product.id)[0],
    );
  }

  return (
    <Grid item xs={6} sm={4} md={3} lg={3}>
      <Badge color="secondary" badgeContent={numberOnCart}>
        <StyledCard>
          <Content product={product} />

          <CardMedia
            component="img"
            image={`img/products/${product.img}`}
            title={product.name}
          />

          <StyledCardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <AddToCart
              numberOnCart={numberOnCart}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            <StyledIconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMore />
            </StyledIconButton>
          </StyledCardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <Typography variant="subtitle1">Detalles</Typography>
                <Typography variant="caption">
                  {multiline(product.description)}
                </Typography>
              </Typography>
            </CardContent>
          </Collapse>
        </StyledCard>
      </Badge>
    </Grid>
  );
};

export default Product;
