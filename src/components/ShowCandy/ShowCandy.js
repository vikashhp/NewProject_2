import classes from './ShowCandy.module.css';
import Button from '../Button/Button';

const ShowCandy = (props) => {
  return (
    <div>
      <li className={classes.candy}>
        <h2>CandyName-{props.candyName}'   '</h2>
        <h2>CandyDescription-{props.candyDescription}'   '</h2>
        <h2>CandyPrice-{props.candyPrice}</h2>
        <Button>Buy 1</Button>
        <Button>Buy 2</Button>
        <Button>Buy 3</Button>
        
      </li>
    </div>
  );
};

export default ShowCandy;
