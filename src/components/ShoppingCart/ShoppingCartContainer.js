import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart";

class SectionContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { cart, handleCloseCart } = this.props;

    return <ShoppingCart cart={cart} handleCloseCart={handleCloseCart} />;
  }
}

export default SectionContainer;
