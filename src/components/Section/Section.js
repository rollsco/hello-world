import React, { Fragment } from "react";
import Product from "../Product/Product";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

const Title = styled(Paper)`
  &&  {
    padding: 8px 16px 8px;
    font-size: 24px;
    text-transform: uppercase;
    background-color: ${props => props.color};
  }
`;

const Section = ({ section, loading }) => (
  <Fragment>
    <Grid item xs={12}>
      <Title color={section.color}>{section.name}</Title>
    </Grid>

    {section.products.map((product, i) => (
      <Product product={product} key={i} />
    ))}
  </Fragment>
);

export default Section;
