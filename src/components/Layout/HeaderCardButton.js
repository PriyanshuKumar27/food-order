import React, { useState, useContext, useEffect } from 'react';
import CartContext from '../../store/cart-context';
//importing CartContext for using useContext to access it
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
  const [btnIsHighlighted,setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx; //object destructuring for useEffect

  //cartCtx.items array consists of objects with item name and its count
  //reduce helps to modify an array into a single value, takes 2 args -
  // 1. function : it takes 2 params - currNumber - initially 0 and for next iteration it is carried on 
  // from pervious iteration
  // 2. starting value : here its 0 , which is initially initialized to currNumber
  const numberofCartItems = items.reduce((currNumber,item)=>{
    return currNumber + item.amount;
  },0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=>{
      setBtnIsHighlighted(false);
    },300)

    return () => {
      clearTimeout(timer);
    };
  },[items]);
  // component is re-evaluated, whenever context is updated
  return ( 
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
           {numberofCartItems}
        </span>
    </button>
  )
}

export default HeaderCardButton