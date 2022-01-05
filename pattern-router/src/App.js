import React, { Component } from "react";
import Food from "./Food";
import Meal from './Meal';
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Switch>
        <Route exact path='/' render={ () => <h1>HOME PAGE!!!</h1>}/>
        <Route exact path="/food/:name" render={ routeProps => <Food {...routeProps} /> } />
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal}/>
        <Route render={() => <h1>ERROR NOT FOUND!!!</h1>}/>
      </Switch>
      </div>
    );
  }
}

export default App;

// /food/:name    url parameter how to match something else.
// 2 ways to render components. 
// 1. component={ component name}  short cut
// 2. render={ () => < component name />}/>  use for multiple props
// exact match the route
// limit route params to 2