import React, { Fragment, useContext } from 'react'
import classes from "../Meals/MealItemForm.module.css"
import CardContext from '../Store/Card-Context'
import Input from '../UI/Input'
const MealItemForm = (props) => {
      const cartCartex = useContext(CardContext)
      // console.log('reinitialize cartXartex',cartCartex)
  const addItemsCart = (event)=>{
    event.preventDefault()
    const quantity = document.getElementById('amount_'+props.id).value
    cartCartex.addItem({...props.item,quantity:quantity})
    // console.log('after addContext',cartCartex);
  }
  return (
  
        <form className={classes.form}>
        <Input label='Amount' input={{
            id:'amount_'+props.id,
            type:'number',
            min:'1',
            max:'5',
            defaultValue:'1'

        }}/>

        <button onClick={addItemsCart}>+ Add</button>
        </form>
  )
}

export default MealItemForm