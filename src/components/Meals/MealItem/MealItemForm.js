import React, {useRef,useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  // we could have used normal state variable, but here we'll be using ref's more precisely forward ref
  // as we have custom compoentn ref prop won't work out of the box
  const amountInputRef = useRef();  
 
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //its always a string
    const enteredAmountNumber = +enteredAmount; //converting to number type

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setAmountIsValid(false);
      return; 
    }
    //Not calling context method here, rather passing amount to parent component via prop
    props.onAddToCart(enteredAmountNumber);
  }
  
    
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" input={{ id: 'amount_' + props.id, type: "number", min : '1', max : '5', step : '1', defaultValue : '1' }} />
      <button >+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
