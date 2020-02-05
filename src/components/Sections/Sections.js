import React, { useState } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "@material-ui/core";
import Section from "../Section/Section";
import { menuSections } from "../../services/parameters/sectionViews";

const StyledSections = styled.div`
  padding-top: 60px;
`;

const Sections = ({ cartAndActions }) => {
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, value) => {
    setValue(value);
  };

  const handleChangeSwipableView = value => {
    setValue(value);
  };

  return (
    <StyledSections>
      <Tabs
        value={value}
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChangeTab}
        indicatorColor="secondary"
      >
        {menuSections.map(({ menuName }) => (
          <Tab key={menuName} label={menuName} />
        ))}
      </Tabs>

      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeSwipableView}
      >
        {menuSections.map((section, i) => (
          <Section
            key={i}
            index={i}
            value={value}
            section={section}
            cartAndActions={cartAndActions}
          />
        ))}
      </SwipeableViews>
    </StyledSections>
  );
};

export default Sections;
