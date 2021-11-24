import React, {Component} from 'react'
import './App.css';
import Die from './Die'



class App extends Component {
  render(){
      return (
        <div className="App">
          <Die face="six"/>
          <Die face="five"/>
          <Die face="four"/>
          <Die face="three"/>
          <Die face="two"/>
          <Die face="one"/>
        </div>
      )
  }
}

export default App;


