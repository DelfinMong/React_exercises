import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './App.css';

class App extends Component{
  render() {
    return (
      <div className="App">
        <Pokecard />
        <h1>Helloworld</h1>
      </div>
    );
  }
}

export default App;
