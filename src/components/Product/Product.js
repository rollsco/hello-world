import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  Button
} from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import ExpandMore from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

const StyledCard = styled(Card)`
  background-color: rgb(0, 0, 0);
`;

const StyledIconButton = styled(IconButton)`
  && {
    margin-left: auto;
    transform: rotate(${props => (props["aria-expanded"] ? "180deg" : "0deg")});
    transition: transform 0.3s;
  }
`;

const Product = ({ product }) => {
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <StyledCard>
        <CardContent>
          <Typography
            variant="h4"
            color="textPrimary"
            component="p"
            align="center"
          >
            {product.name}
          </Typography>
          <Typography
            variant="h5"
            color="textSecondary"
            component="p"
            align="center"
          >
            ${product.price}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <StyledIconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </StyledIconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Mucha más información de la que uno podría jamás imaginar. Lolem
              ipsum dolot sid amet in redditans upvotarum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
              qui in ea voluptate velit esse quam nihil molestiae consequatur,
              vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </Typography>
          </CardContent>
        </Collapse>
      </StyledCard>
    </Grid>
  );
};

export default Product;
