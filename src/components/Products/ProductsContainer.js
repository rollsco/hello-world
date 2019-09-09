import React, { Component } from "react";
import Products from "./Products";
import { rollsApiGet } from "../../services/rollsApiService";

class ProductsContainer extends Component {
  state = {
    sections: [],
    loading: true
  };

  async componentDidMount() {
    // TODO create action to put result in Store
    const sections = await rollsApiGet("sections", {
      include: ["full-products"]
    });

    this.setState({ sections, loading: false });
  }

  render() {
    const { addToCart } = this.props;
    const { sections, loading } = this.state;

    if (!sections) return;

    return (
      <Products addToCart={addToCart} sections={sections} loading={loading} />
    );
  }
}

export default ProductsContainer;
