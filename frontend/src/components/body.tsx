import { Grid } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { ProductComponent } from "./product";
import { Product } from "../models/product";

interface BodyProps {
  addCartItem: Function;
  removeCartItem: Function;
  products: Array<Product>;
}

export const BodyComponent: FunctionComponent<BodyProps> = props => {
  const { addCartItem, removeCartItem, products } = props;

  return (
    <Grid
      direction="row"
      alignItems="center"
      justify="space-evenly"
      container
      item
      spacing={5}
    >
      {products.map(product => {
        return (
          <ProductComponent
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            product={product}
          />
        );
      })}
    </Grid>
  );
};
