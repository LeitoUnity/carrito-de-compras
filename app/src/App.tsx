import { Grid } from "@material-ui/core";
import React, { FunctionComponent, useState, useEffect } from "react";
import { BodyComponent } from "./components/body";
import { HeaderComponent } from "./components/header";
import { Product } from "./models/product";
import { getProducts } from "./Api";

const LiderApp: FunctionComponent<{}> = () => {
  const [cart, setCartItems] = useState<Array<number>>([]);
  const [products, setProducts] = useState<Array<Product>>([]);

  const addCartItem = (item: Product) => {
    setCartItems([...cart, item.id]);
  };

  const removeCartItem = (item: Product) => {
    const index = cart.indexOf(item.id);
    if (index > -1) {
      let temporaryCart = cart;
      temporaryCart.splice(index, 1);
      setCartItems([...temporaryCart]);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };

    fetchProducts();
  }, []);

  return (
    <Grid direction="column" container spacing={0}>
      <HeaderComponent cart={cart} products={products} />
      <BodyComponent
        addCartItem={addCartItem}
        removeCartItem={removeCartItem}
        products={products}
      />
    </Grid>
  );
};

export default LiderApp;
