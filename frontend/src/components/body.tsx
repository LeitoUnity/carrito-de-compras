import { Grid } from "@material-ui/core";
import React, { FunctionComponent, useState, useEffect } from "react";
import { FilterComponent } from "./filter";
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
      justify="space-evenly"
      alignItems="center"
      container
      item
      spacing={3}
    >
      <Grid item alignItems="flex-start" xs={3}>
        <FilterComponent min={0} max={100000} numberOfSegments={5} />
      </Grid>
      <Grid
        direction="row"
        alignItems="center"
        container
        item
        xs={9}
        spacing={3}
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
    </Grid>
  );
};
