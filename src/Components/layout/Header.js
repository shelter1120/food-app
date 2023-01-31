import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
 import classes from '../layout/Header.module.css'
import HeaderButtonCart from './HeaderButtonCart'

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderButtonCart  onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='image of dishes' />
        </div>
    </Fragment>
  )
}

export default Header