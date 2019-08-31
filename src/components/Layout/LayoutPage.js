import React, { Fragment } from "react";
import styled from "styled-components";
import Banner from "./Banner";

const StyledPage = styled.div`
  padding: 100px;
  background-color: rgb(70, 70, 70);
`;

const LayoutPage = ({ loading }) => (
  <Fragment>
    <Banner />
    <StyledPage>
      <div>Rolls Co - Pedidos</div>
    </StyledPage>
    <Banner />
  </Fragment>
);

export default LayoutPage;
