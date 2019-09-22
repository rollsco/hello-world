import React, { Component } from "react";
import Cart from "./Cart";

class SectionContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { cart, handleCloseCart, removeFromCart } = this.props;

    return <Cart cart={cart} handleCloseCart={handleCloseCart} removeFromCart={removeFromCart} />;
  }
}

export default SectionContainer;
