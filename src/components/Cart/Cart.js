import Button from "../Button/Button";
import classes from "./Cart.module.css";
import { useContext } from "react";

import CartConext from "../store/cartContext";

const Cart = () => {
 const cartCtx=useContext(CartConext);
 const cartItemsNumber=cartCtx.items.length;
  return (
    <div className={classes.cart}>
      <header>Candy App</header>
      <h2>CartItems-{cartItemsNumber}</h2>
    </div>
  );
};

export default Cart;
