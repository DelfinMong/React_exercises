import React from 'react';
import '../css/App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Course from "./Course"
import Teachers from './Teachers';


const App = () => (
      <BrowserRouter>
        <div className="container">
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={ () => <About title="About"/>}/>
            <Route path="/teachers" component={Teachers}/>
            <Route path="/course" component={Course}/>
        </div>
      </BrowserRouter>
)

export default App;
