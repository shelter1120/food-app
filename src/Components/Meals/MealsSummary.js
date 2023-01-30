import React from 'react'
import classes from "../Meals/MealsSummary.module.css"

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h1 >Delicious Food,Delivered To You</h1>
        <div>
        <p>Choose your fav meal from our broad selection and enjoy meal at your home for lunch/dinner</p>
        <p>All meals are cook with high quality  fresh ingredient & ofcourse by masterchefs! </p>
        </div>
    </section>
  )
}

export default MealsSummary