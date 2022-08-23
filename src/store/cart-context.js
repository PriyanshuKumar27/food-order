import React from "react";

const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItem : (item) => {},
    removeItem : (id)=>{}
});
//we need to manage this CartContext by using state or reducer
export default CartContext;