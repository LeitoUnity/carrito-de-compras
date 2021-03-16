import {
  Button,
  Grid,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Modal
} from "@material-ui/core";
import React, { FunctionComponent, useState, useEffect } from "react";
import "./header.css";
import * as _ from "lodash";
import { Product } from "../models/product";
import { Discount } from "../models/discount";
import { CartItemComponent } from "./cartItem";
import { getDiscountsByBrands } from "../Api";

interface HeaderProps {
  cart: Array<number>;
  products: Array<Product>;
}

interface ProductInCart {
  product: Product;
  quantity: number;
}

function getModalStyle() {
  return {
    top: `7.5%`,
    left: `70%`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      height: 500,
      overflow: "scroll",
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      padding: theme.spacing(2, 4, 3)
    }
  })
);

export const HeaderComponent: FunctionComponent<HeaderProps> = props => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [groupedCart, setGroupedCart] = React.useState<Array<ProductInCart>>(
    []
  );
  const [discounts, setDiscounts] = useState<Array<Discount>>([]);
  const [subTotal, setSubTotal] = React.useState(0);
  const [discountLabel, setDiscountLabel] = React.useState("");
  const [appliedDiscount, setAppliedDiscount] = React.useState<Discount>(null);
  const [appliedDiscountLabel, setAppliedDiscountLabel] = React.useState("");
  const [total, setTotal] = React.useState(0);

  const { cart, products } = props;

  const fetchDiscounts = async () => {
    const brands = _.uniq(groupedCart.map(gc => gc.product.brand)).join(",");
    setDiscounts(
      await getDiscountsByBrands({
        brands: brands
      })
    );
  };

  function updateSubTotal() {
    setSubTotal(_.sum(groupedCart.map(gc => gc.product.price * gc.quantity)));
  }

  function applyDiscounts() {
    for (let i = 0; i < discounts.length; i++) {
      const discount = discounts[i];
      const filteredProducts = groupedCart.filter(
        gc => gc.product.brand === discount.brand
      );

      const totalByBrand = _.sum(
        filteredProducts.map(fp => fp.product.price * fp.quantity)
      );

      if (i === 0) {
        if (totalByBrand < discount.threshold) {
          setDiscountLabel(
            `Agrega ${discount.threshold - totalByBrand} más en productos ${
              discount.brand
            } y aprovecha un descuento total de $${
              discount.discount
            } en tu compra!`
          );
        } else {
          setDiscountLabel("");
        }
      }

      if (totalByBrand >= discount.threshold) {
        setAppliedDiscount(discount);
        break;
      } else {
        setAppliedDiscount(null);
      }
    }
  }

  useEffect(() => {
    const bufferGroupedCart = _.groupBy(cart);

    setGroupedCart(
      Object.keys(bufferGroupedCart).map(cartItem => {
        return {
          product: products.find(p => p.id === parseInt(cartItem)),
          quantity: _.get(bufferGroupedCart, cartItem)["length"]
        };
      })
    );
  }, [cart]);

  useEffect(() => {
    fetchDiscounts();
    updateSubTotal();
  }, [groupedCart]);

  useEffect(() => {
    applyDiscounts();
  }, [discounts]);

  useEffect(() => {
    if (appliedDiscount) {
      setAppliedDiscountLabel(
        `* Se aplicó un descuento de $${appliedDiscount.discount} por haber comprado al menos $${appliedDiscount.threshold} en productos ${appliedDiscount.brand}!`
      );

      setTotal(subTotal - appliedDiscount.discount);
    } else {
      setDiscountLabel("");
      setAppliedDiscountLabel("");
      setTotal(subTotal);
    }
  }, [appliedDiscount]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Resumen</h3>
      <hr></hr>
      {groupedCart.map(gc => {
        return (
          <CartItemComponent product={gc.product} quantity={gc.quantity} />
        );
      })}
      <hr />
      {discountLabel !== "" ? (
        <div>
          <b>{discountLabel}</b>
          <hr />
        </div>
      ) : (
        React.Fragment
      )}

      <Grid container direction="column">
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h4>SubTotal de productos</h4>
          </Grid>
          <Grid item>${subTotal}</Grid>
        </Grid>
        {appliedDiscount ? (
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <h4>Descuento por marca</h4>
            </Grid>
            <Grid item>-${appliedDiscount.discount}</Grid>
          </Grid>
        ) : (
          React.Fragment
        )}

        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h5>{appliedDiscountLabel}</h5>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <h4>Total a pagar</h4>
          </Grid>
          <Grid item>${total}</Grid>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Grid
      direction="row"
      justify="space-around"
      alignItems="center"
      container
      item
      spacing={0}
      className={"Header-container"}
    >
      <img
        src={"https://www.lider.cl/images/logo.svg"}
        alt="Lider.cl"
        className={"logo"}
      />
      <TextField id="standard-basic" label="🔎 Search" />
      <Button variant="contained" onClick={handleOpen} color="primary">
        {"🛒" + cart.length}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Grid>
  );
};
