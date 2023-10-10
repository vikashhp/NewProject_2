import logo from "./logo.svg";
import "./App.css";
import AddCandy from "./components/AddCandy/AddCandy";
import Candy from "./components/ShowCandy/Candy";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/store/CartContexProvider";

function App() {
  const [candy, setCandy] = useState([]);

  const candyDataHandler = (candyData) => {
    console.log(candyData);
    setCandy((previous) => {
      return [...previous, candyData];
    });
  };

  return (
    <CartContextProvider >
       <Cart/>
      <AddCandy onAdd={candyDataHandler}/>
      <Candy items={candy} />
    </CartContextProvider>
  );
}

export default App;
