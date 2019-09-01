import React from "react";
import SectionContainer from "../Section";
import { Grid } from "@material-ui/core";

const Products = ({ sections, loading }) => {
  return (
    <Grid container spacing={5}>
      {sections.map((section, i) => (
        <SectionContainer section={section} key={i} />
      ))}
    </Grid>
  );
};

export default Products;
