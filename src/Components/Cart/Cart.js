import React, { useContext } from "react";
import classes from "../Cart/Cart.module.css"
import CardContext from "../Store/Card-Context";
import Modal from "../UI/Modal";


const Cart = (props) => {
   const itemContex = useContext(CardContext)

   const fixedRepeatCartItems = itemContex.items.reduce((acc,curr)=> {
    const found = acc.find((el)=>el.name === curr.name)
    if(!found){
      acc.push({...curr,quantity:1})
    }else{
      found.quantity += parseInt(curr.quantity);
    }
    return acc;
   },[]);

   const addItemHanlder = (item)=>{
         fixedRepeatCartItems.addItem(item)
   }
  const cartItems = (
    <ul>
      {fixedRepeatCartItems.map((item) => (
        <li>Name:{item.name} price:{item.price} quantity:{item.quantity}
        <button onClick={addItemHanlder}>+</button></li>
        
      ))}
    </ul>
  );

  const totalCartPrice = fixedRepeatCartItems.reduce((acc,curr)=> acc + curr.price *curr.quantity ,0)
  
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalCartPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>

      </div>
    </Modal>
  );
};

export default Cart;

//this cart is used for modal
