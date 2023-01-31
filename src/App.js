import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';
import Header from './Components/layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  const [CartIsShown,setCartIsShown] = useState(false)

  const showCartHandler = ()=>{
     setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return (
    <Fragment>
      { CartIsShown &&  <Cart onClose={hideCartHandler}/> }
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
 
export default App;
 