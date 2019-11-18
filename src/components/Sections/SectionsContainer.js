import React, { useState } from "react";
import Sections from "./Sections";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";
import { withFirebase } from "../FirebaseContext";

const SectionsContainer = ({ cart, addToCart, removeFromCart, firebase }) => {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState(getLocalStorageItem("sections", []));

  // onMount
  React.useEffect(() => {
    async function effect() {
      let sections = getLocalStorageItem("sections");

      if (!sections || sections.length <= 0) {
        sections = await firebase.getList({
          path: "sections",
          include: ["full-products"],
        });
      }

      updateSections(sections);
    }
    effect();
  }, []);

  function updateSections(sections) {
    setLoading(false);
    setSections(sections);
    setLocalStorageItem("sections", sections);
  }

  return (
    <Sections
      cart={cart}
      loading={loading}
      sections={sections}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  );
};

export default withFirebase(SectionsContainer);
