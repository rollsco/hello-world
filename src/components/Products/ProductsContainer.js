import React, { Component } from "react";
import Products from "./Products";
import { rollsApiGet } from "../../services/rollsApiService";
import { withFirebase } from "../FirebaseContext";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "../../services/localStorage";

class ProductsContainer extends Component {
  state = {
    sections: [],
    loading: true,
  };

  updateSections(sections) {
    this.setState({ sections });
    setLocalStorageItem("sections", sections);
  }

  async componentDidMount() {
    const { get } = this.props.firebase;
    const localSections = getLocalStorageItem("sections");

    if (localSections) {
      this.updateSections(localSections);
      this.setState({ loading: false });
    } else {
      // TODO create action to put result in Store
      const sections = await get("sections", {
        include: ["full-products"],
      });

      this.updateSections(sections);
      this.setState({ loading: false });
    }
  }

  render() {
    const { cart, addToCart, removeFromCart } = this.props;
    const { sections, loading } = this.state;

    if (!sections) return;

    return (
      <Products
        cart={cart}
        removeFromCart={removeFromCart}
        addToCart={addToCart}
        sections={sections}
        loading={loading}
      />
    );
  }
}

export default withFirebase(ProductsContainer);
