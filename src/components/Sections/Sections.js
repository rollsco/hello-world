import React, { useState } from "react";
import styled from "styled-components";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab } from "@material-ui/core";
import { sections } from "../../data/sections";
import Section from "../Section/Section";

const StyledSections = styled.div`
  padding-top: 60px;
`;

const Sections = ({ setVariantIds }) => {
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
        {sections.map(section => (
          <Tab label={section.menuName} key={section.menuName} />
        ))}
      </Tabs>

      <SwipeableViews
        axis="x"
        index={value}
        onChangeIndex={handleChangeSwipableView}
      >
        {sections.map((section, i) => (
          <Section
            key={i}
            index={i}
            value={value}
            section={section}
            setVariantIds={setVariantIds}
          />
        ))}
      </SwipeableViews>
    </StyledSections>
  );
};

export default Sections;
