import React, {Component} from 'react'
import './App.css';
import Die from './Die'



class App extends Component {
  render(){
      return (
        <div className="App">
          <Die face="six"/>
          <Die face="five"/>
          <Die face="three"/>
          <Die face="two"/>
        </div>
      )
  }
}

export default App;


