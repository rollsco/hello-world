import React, { useState } from "react";
import Header from "../../UI/FullscreenDialog/Header";
import {
  Dialog,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { DialogTransition } from "../../components";
import Content from "../../UI/FullscreenDialog/Content";
import { VariantMedia, Sections, SectionName, Actions } from "./components";
import SelectSize from "./SelectSize";
import { variants } from "../../../data/variants";
import { multiline, currency } from "../../../services/formatter/formatter";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { setLocalStorageItem } from "../../../services/localStorage/localStorage";
import { getNewCartItem } from "../../../entities/CartItem";
import { products } from "../../../data/products";

const getProductImagePathname = ({ product, variantId }) => {
  const imagesPath = "img/data";
  const variant = variants[variantId];

  if (variant && variant.image) {
    return `${imagesPath}/${variant.image[0].filename}`;
  } else if (product.image) {
    return `${imagesPath}/${product.image[0].filename}`;
  }
};

const CustomizeDialog = ({ cart, updateCart, variantIds, setVariantIds }) => {
  const productId = variants[variantIds.main].product;
  const product = products[productId];

  const handleClose = () => {
    setVariantIds(null);
  };

  const handleChangeMain = event => {
    setVariantIds({ ...variantIds, main: event.target.value });
  };

  const handleAddToCart = () => {
    updateCart({
      ...cart,
      items: [...cart.items, getNewCartItem(variantIds)],
    });
    setVariantIds(null);
  };

  return (
    <Dialog fullScreen open={variantIds} TransitionComponent={DialogTransition}>
      <Header
        title={`Agregar ${product.name.toUpperCase()}`}
        onCloseButtonClick={handleClose}
      />

      <Content maxWidth="xs">
        <Card>
          <VariantMedia
            component="img"
            image={getProductImagePathname({
              product,
              variantId: variantIds.main,
            })}
          />

          <CardContent>
            <Typography variant="h6" color="secondary">
              {currency(variants[variantIds.main].price)}
            </Typography>

            {multiline(variants[variantIds.main].description)}
          </CardContent>
        </Card>

        <Sections>
          <SectionName color="secondary" variant="h6">
            Tamaño
          </SectionName>

          <SelectSize
            value={variantIds.main}
            variantIds={product.variants}
            handleChange={handleChangeMain}
          />
        </Sections>

        <Actions>
          <Button color="secondary" onClick={handleAddToCart}>
            Agregar &nbsp;
            <ShoppingCart />
          </Button>
        </Actions>
      </Content>
    </Dialog>
  );
};

export default CustomizeDialog;
