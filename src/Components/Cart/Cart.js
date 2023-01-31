import React from "react";
import classes from "../Cart/Cart.module.css"
import Modal from "../UI/Modal";


const Cart = () => {
  const cartItems = (
    <ul>
      {[
        {
          id: "c1",
          name: "sushi",
          amount: "2",
          price: 12.0,
        },
      ].map((items) => (
        <li>{items.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

//this cart is used for modal
