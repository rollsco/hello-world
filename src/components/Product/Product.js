import React from "react";
import styled from "styled-components";
import { AddToCart } from "./AddToCart";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Favorite from "@material-ui/icons/Favorite";
import Content from "./Content";

const StyledCard = styled(Card)`
  margin: 0 auto;
  x-max-width: 80%;
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

const Product = ({ section, addToCart, product }) => {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        <Content color={section.color} product={product} />

        <StyledCardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <AddToCart handleAddToCart={handleAddToCart} />
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
              <Typography variant="subtitle1">Mucha más información</Typography>
              <Typography variant="caption">
                Sobre este chuchi de la que podría imaginarse. Lolem ipsum dolot
                sid amet in redditans upvotarum. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque
                laudantium.
              </Typography>
              <Typography variant="subtitle1">Otra cosa más:</Typography>
              <Typography variant="caption">
                A que no sabías que lolem ipsum dolot sid amet in redditans
                upvotarum. Totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Typography>
          </CardContent>
        </Collapse>
      </StyledCard>
    </Grid>
  );
};

export default Product;
