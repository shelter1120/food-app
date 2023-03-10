import React from "react";
import classes from "../Meals/MealItem.module.css"
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const price = `'$'${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealItemForm item={props} id={props.id} />
        
      </div>
    </li>
  );
};

export default MealItem;
// we make two div one for maping and second for adding form.
