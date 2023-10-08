import classes from "./ShowCandy.module.css";
import Button from "../Button/Button";
import CartConext from "../store/cartContext";
import { useContext } from "react";

const ShowCandy = (props) => {
  const cartCtx = useContext(CartConext);

  const oneHandler = () => {
   
  };
  const twoHandler = () => {

  };
  const threeHandler = () => {
  
   
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
