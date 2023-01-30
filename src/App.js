import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Header from './Components/layout/Header';
import Meals from './Components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
 
export default App;
 