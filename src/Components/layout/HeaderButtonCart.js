import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../layout/HeaderButtonCart.module.css"
import CardContext from "../Store/Card-Context";

const HeaderButtonCart = (props) => {
   const contx =  useContext(CardContext)
   let quantity = 0;
  contx.items.forEach(item=>{
    quantity = quantity+ Number(item.quantity);
   })

  return (
    <button className={classes.button} onClick={props.onClick}> 
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>      
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderButtonCart;
