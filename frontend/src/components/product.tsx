import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  IconButton,
  Divider
} from "@material-ui/core";
import React, { FunctionComponent, useState } from "react";
import { Product } from "../models/product";

export interface ProductProps {
  product: Product;
  addCartItem: Function;
  removeCartItem: Function;
}

const useStyles = makeStyles(theme => ({
  productImage: {
    width: "75%",
    height: "75%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },

  productButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

export const ProductComponent: FunctionComponent<ProductProps> = props => {
  const classes = useStyles();
  const [productQuantity, setProductQuantity] = useState(0);
  const { product, addCartItem, removeCartItem } = props;

  return (
    <Grid item xs={3}>
      <Card>
        <CardContent>
          <img
            src={"https://" + product.image.toString()}
            className={classes.productImage}
            alt={product.id.toString()}
          />
          <Divider></Divider>
          <Typography variant="body2" component="p">
            <b>{product.brand}</b> {product.description}
          </Typography>
          <br></br>
          <Typography variant="body1" component="p">
            <b>{product.price + "$"}</b>
          </Typography>
        </CardContent>
        <CardActions>
          {productQuantity === 0 ? (
            <Button
              variant="contained"
              className={classes.productButton}
              onClick={() => {
                setProductQuantity(productQuantity + 1);
                addCartItem(product);
              }}
            >
              Agregar
            </Button>
          ) : (
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid>
                <IconButton
                  className={classes.productButton}
                  onClick={() => {
                    setProductQuantity(productQuantity - 1);
                    removeCartItem(product);
                  }}
                >
                  -
                </IconButton>
              </Grid>
              <Grid>{productQuantity}</Grid>
              <Grid>
                <IconButton
                  className={classes.productButton}
                  onClick={() => {
                    setProductQuantity(productQuantity + 1);
                    addCartItem(product);
                  }}
                >
                  +
                </IconButton>
              </Grid>
            </Grid>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};
