import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Button
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

const StyledCard = styled(Card)`
  margin: 0 auto;
  -max-width: 80%;
`;

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

const StyledCardActions = styled(CardActions)`
  justify-content: space-between;
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

const StyledIconButton = styled(IconButton)`
  && {
    transform: rotate(${props => (props["aria-expanded"] ? "180deg" : "0deg")});
    transition: transform 0.3s;
  }
`;

const AddButton = () => {
  const isOnCart = Math.random() * 4 < 1;
  return (
    <Button variant={isOnCart ? "contained" : "outlined"}>
      {isOnCart ? (
        <Fragment>
          <RemoveShoppingCart /> Quitar
        </Fragment>
      ) : (
        <Fragment>
          <AddShoppingCart /> Agregar
        </Fragment>
      )}
    </Button>
  );
};

const Product = ({ section, product }) => {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        <StyledCardContent>
          <StyledCardHeader
            avatar={
              <ColourCircle backgroundcolor={section.color}>
                <FiberManualRecord />
              </ColourCircle>
            }
            title={product.name}
            subheader={`$${product.price}.000`}
          />
          <ProductPhoto
            src={`https://source.unsplash.com/${product.img}/300x150`}
          />
        </StyledCardContent>

        <StyledCardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <AddButton />
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
