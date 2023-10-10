import CartConext from "./cartContext";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
  amount1:0,
  amount2:0,
  amount3:0
};

const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
      const updatedAmount1=state.amount+1;
      const updatedAmount2=state.amount+2;
      const updatedAmount3=state.amount+3;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      amount1:updatedAmount1,
      amount2:updatedAmount2,
      amount3:updatedAmount3
    };
  }
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducerFn, defaultState);

  const addItemTOCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const cart = {
    items: state.items,
    totalAmount: state.totalAmount,
    amount1:state.amount1,
    amount2:state.amount2,
    amount3:state.amount3,
    addItem: addItemTOCartHandler,
  };

  return (
    <CartConext.Provider value={cart}>{props.children}</CartConext.Provider>
  );
};

export default CartContextProvider;
