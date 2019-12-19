import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.componenet';
import { Switch,Route } from 'react-router-dom';

const HatPages = () =>(
  <div>
  <h1>HAT PAGE</h1>
  </div>
);

function App() {
  return <div > 
  <Switch>
  <Route exact path='/' component={HomePage}/>
  <Route  path='/shop/hats' component={HatPages}/>
  </Switch>
  </div>
  
}

export default App;
