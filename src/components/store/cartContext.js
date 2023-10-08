import React from "react";

const CartConext = React.createContext({
  items: [],
 addItem:()=>{},
 amount:0
});

export default CartConext;
