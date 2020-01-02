import React, { useState } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { LinearProgress, Tabs, Tab } from "@material-ui/core";
import SectionContainer from "../Section/SectionContainer";
import { sections } from "../../data/sections";

const StyledSections = styled.div`
  padding-top: 60px;
`;

const Sections = ({
  loading,
  cart,
  addToCart,
  removeFromCart,
  variantIds,
  setVariantIds,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <StyledSections>
      {loading && <LinearProgress variant="query" color="secondary" />}

      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        indicatorColor="secondary"
      >
        {sections.map(section => (
          <Tab label={section.menuName} key={section.menuName} />
        ))}
      </Tabs>

      <SwipeableViews axis="x" index={value} onChangeIndex={handleChangeIndex}>
        {sections.map((section, i) => (
          <SectionContainer
            key={i}
            index={i}
            cart={cart}
            value={value}
            section={section}
            addToCart={addToCart}
            variantIds={variantIds}
            setVariantIds={setVariantIds}
            removeFromCart={removeFromCart}
          />
        ))}
      </SwipeableViews>
    </StyledSections>
  );
};

export default Sections;
