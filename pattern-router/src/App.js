import React, { Component } from "react";
import Food from "./Food";
import Meal from './Meal';
import { Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
            <Route exact
                   path="/food/:name" 
                  //  component={Food}
                   render={ routeProps => <Food {...routeProps} /> }  
            />
            <Route path='/food/:foodName/drink/:drinkName' component={Meal}/>
           
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