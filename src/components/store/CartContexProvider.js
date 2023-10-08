import CartConext from "./cartContext";

const CartContextProvider = (props) => {
  const cart = {
    items:props.add,
  };

  return (
    <CartConext.Provider value={cart}>{props.children}</CartConext.Provider>
  );
};

export default CartContextProvider;
