import React, { Fragment } from "react";
import SectionContainer from "../Section";
import { Grid, LinearProgress } from "@material-ui/core";

const Products = ({ sections, cart, addToCart, removeFromCart, loading }) => {
  return (
    <Fragment>
      {loading && <LinearProgress variant="query" color="secondary" />}
      <Grid container spacing={5}>
        {sections.map((section, i) => (
          <SectionContainer
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            section={section}
            key={i}
          />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Products;
