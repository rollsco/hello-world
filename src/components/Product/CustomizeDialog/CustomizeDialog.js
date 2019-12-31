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
import {
  VariantMedia,
  Sections,
  SectionDivider,
  SectionName,
  Actions,
} from "./components";
import SelectSize from "./SelectSize";
import { variants } from "../../../data/variants";
import { multiline, currency } from "../../../services/formatter/formatter";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

const getProductImagePathname = ({ product, variantId }) => {
  const imagesPath = "img/data";
  const variant = variants[variantId];

  if (variant && variant.image) {
    return `${imagesPath}/${variant.image[0].filename}`;
  } else if (product.image) {
    return `${imagesPath}/${product.image[0].filename}`;
  }
};

const CustomizeDialog = ({ open, handleClose, product, handleAddToCart }) => {
  const [variantId, setVariantId] = useState(product.variants[0]);

  const handleChangeVariant = event => {
    setVariantId(event.target.value);
  };

  return (
    <Dialog fullScreen open={open} TransitionComponent={DialogTransition}>
      <Header
        title={`Agregar ${product.name.toUpperCase()}`}
        onCloseButtonClick={handleClose}
      />

      <Content maxWidth="xs">
        <Card>
          <VariantMedia
            component="img"
            image={getProductImagePathname({ product, variantId })}
          />

          <CardContent>
            <Typography variant="h6" color="secondary">
              {currency(variants[variantId].price)}
            </Typography>

            {multiline(variants[variantId].description)}
          </CardContent>
        </Card>

        <Sections>
          <SectionName color="secondary" variant="h6">
            Tamaño
          </SectionName>

          <SelectSize
            value={variantId}
            variantIds={product.variants}
            handleChange={handleChangeVariant}
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
