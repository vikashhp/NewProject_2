import { useRef } from "react";
import Button from "../Button/Button";

const AddCandy = (props) => {
  const inputName = useRef();
  const inputDescription = useRef();
  const inputPrice = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const candyData = {
      candyName: inputName.current.value,
      candyDescription: inputDescription.current.value,
      candyPrice: inputPrice.current.value,
      id: Math.random(),
    };

    // console.log(candyData);
    props.onAdd(candyData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Candy Name</label>
        <input type="text" ref={inputName} />
      </div>
      <div>
        <label>Candy Description</label>
        <input type="text" ref={inputDescription} />
      </div>
      <div>
        <label>Candy Price</label>
        <input type="number" ref={inputPrice} />
      </div>
      <div>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default AddCandy;
