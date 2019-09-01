import React, { Component } from "react";
import Products from "./Products";
import { get } from "../../services/rollsApiService";

class ProductsContainer extends Component {
  state = {
    sections: [],
    loading: true
  };

  componentDidMount() {
    // TODO create action to put result in Store
    const sections = get("sections");

    this.setState({ sections, loading: false });
  }

  render() {
    const { sections, loading } = this.state;

    return <Products sections={sections} loading={loading} />;
  }
}

export default ProductsContainer;
