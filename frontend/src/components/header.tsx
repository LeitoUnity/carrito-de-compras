import {
  Button,
  Grid,
  TextField,
  createStyles,
  makeStyles,
  Theme,
  Modal,
  Divider
} from "@material-ui/core";
import React, { FunctionComponent, useEffect } from "react";
import "./header.css";
import * as _ from "lodash";
import { Product } from "../models/product";
import { Discount } from "../models/discount";
import { CartItemComponent } from "./cartItem";

interface HeaderProps {
  cart: Array<Number>;
  products: Array<Product>;
  discounts: Array<Discount>;
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
  const [groupedCart, setGroupedCart] = React.useState({});
  const { cart, products, discounts } = props;

  useEffect(() => {
    setGroupedCart(_.groupBy(cart));
  }, [cart]);

  console.log();

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
      {Object.keys(groupedCart).map(element => {
        let product = products.find(p => p.id === parseInt(element));
        return (
          <CartItemComponent
            product={product}
            quantity={_.get(groupedCart, element)["length"]}
          />
        );
      })}
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
