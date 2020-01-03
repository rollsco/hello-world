import React from "react";
import Header from "../../UI/FullscreenDialog/Header";
import {
  Dialog,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import Content from "../../UI/FullscreenDialog/Content";
import SelectSize from "./SelectSize";
import { variants } from "../../../data/variants";
import { multiline, currency } from "../../../services/formatter/formatter";
import { getNewCartItem } from "../../../entities/CartItem";
import { products } from "../../../data/products";
import { DialogTransition } from "../../components";
import { VariantMedia, Sections, SectionName, Actions } from "./components";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { getVariantImagePathname } from "../../../entities/Variant";

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
    if (!variantIds.itemId) {
      updateCart({
        ...cart,
        items: [...cart.items, getNewCartItem(variantIds)],
      });
    } else {
      const newItems = cart.items.filter(item => item.id !== variantIds.itemId);
      updateCart({
        ...cart,
        items: [...newItems, getNewCartItem(variantIds)],
      });
    }
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
            image={getVariantImagePathname({ variantId: variantIds.main })}
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
