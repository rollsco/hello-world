import React from "react";
import Sections from "./Sections";
import { sections } from "../../data/sections";

const SectionsContainer = ({ cart, addToCart, removeFromCart }) => (
  <Sections
    cart={cart}
    sections={sections}
    addToCart={addToCart}
    removeFromCart={removeFromCart}
  />
);

export default SectionsContainer;
