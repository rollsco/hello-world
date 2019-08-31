import React, { Component } from "react";
import LayoutPage from "./LayoutPage";

class LayoutContainer extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    return <LayoutPage loading={loading} />;
  }
}

export default LayoutContainer;
