import React from 'react'
import classes from './Input.module.css';

//component function is an argument to forward ref
//forwarding ref from Input to be used in <input> element
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  )
});

export default Input