import { Component } from 'react';
import Chips from './component/Chips';
import Sardines from './component/Sardines';
import Soda from './component/Soda';
import VendingMachine from './component/VendingMachine';
import './App.css';

class App extends Component{
    render(){
    return (
      <div className="App">
      HELLO
      <Chips />
      <Sardines />
      </div>
    );
  }
}

export default App;
