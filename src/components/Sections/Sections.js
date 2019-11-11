import React, { Fragment } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { LinearProgress, Tabs, Tab } from "@material-ui/core";
import SectionContainer from "../Section/SectionContainer";

const StyledSections = styled.div`
  padding-top: 60px;
`;

const Sections = ({ sections, loading, cart, addToCart, removeFromCart }) => {
  const [value, setValue] = React.useState(0);

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
        onChange={handleChange}
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
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
            removeFromCart={removeFromCart}
          />
        ))}
      </SwipeableViews>
    </StyledSections>
  );
};

export default Sections;
