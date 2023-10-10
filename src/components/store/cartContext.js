import React from "react";

const CartConext = React.createContext({
  items: [],
  totalAmount:0,
 addItem:()=>{},
 amount:0

});

export default CartConext;
