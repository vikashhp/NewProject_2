import classes from "./ShowCandy.module.css";
import Button from "../Button/Button";
import CartConext from "../store/cartContext";
import { useContext } from "react";
import { useState } from "react";

const ShowCandy = (props) => {
  const cartCtx = useContext(CartConext);

  // console.log(amount)
 

  const oneHandler = () => {
    cartCtx.addItem({
      id: Math.random(),
      candyName: props.candyName,
  
      candyPrice: props.candyPrice,
    })
  //  console.log(state)
  };
  const twoHandler = () => {

    cartCtx.addItem({
      id: Math.random(),
      candyName: props.candyName,
  
      candyPrice: props.candyPrice,
    })

  };
  const threeHandler = () => {

    cartCtx.addItem({
      id: Math.random(),
      candyName: props.candyName,
  
      candyPrice: props.candyPrice,
    })
  
   
  };
  return (
    <div>
      <li className={classes.candy}>
        <h2>CandyName-{props.candyName}' '</h2>
        <h2>CandyDescription-{props.candyDescription}' '</h2>
        <h2>CandyPrice-{props.candyPrice}</h2>
        <Button onClick={oneHandler}>Buy 1</Button>
        <Button onClick={twoHandler}>Buy 2</Button>
        <Button onClick={threeHandler}>Buy 3</Button>
      </li>
    </div>
  );
};

export default ShowCandy;
