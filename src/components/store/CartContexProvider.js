import CartConext from "./cartContext";

const CartContextProvider = (props) => {
  const cart = {
    items:props.add,
    addItem:()=>{},
    amount:0
  };

  return (
    <CartConext.Provider value={cart}>{props.children}</CartConext.Provider>
  );
};

export default CartContextProvider;
