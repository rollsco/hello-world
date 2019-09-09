import React from "react";
import styled from "styled-components";
import Header from "./Header";
import ProductsContainer from "../Products";
import Footer from "./Footer";
import ShoppingCartContainer from "../ShoppingCart";
import { CssBaseline, Container } from "@material-ui/core";

const Products = styled(Container)`
  padding: 96px 0 96px;
`;

const initialStateCart = {
  open: false,
  products: []
};

const LayoutPage = ({ loading }) => {
  const [cart, setCart] = React.useState(initialStateCart);

  function handleOpenCart() {
    setCart({ ...cart, open: true });
  }

  function handleCloseCart() {
    setCart({ ...cart, open: false });
  }

  function addToCart(product) {
    setCart({
      ...cart,
      products: [...cart.products, product]
    });
  }

  return (
    <CssBaseline>
      <Header productsNumber={cart.products.length} />

      <Products maxWidth="lg">
        <ProductsContainer addToCart={addToCart} />
      </Products>

      <Footer handleOpenCart={handleOpenCart} />

      <ShoppingCartContainer cart={cart} handleCloseCart={handleCloseCart} />
    </CssBaseline>
  );
};

export default LayoutPage;
