import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Chips from './component/Chips';
import Sardines from './component/Sardines';
import Soda from './component/Soda';
import VendingMachine from './component/VendingMachine';
import './App.css';

class App extends Component{
    render(){
    return (
      <div className="App">
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='' element={<Chips />} />
          <Route path='' element={<Sardines />} />
          <Route path='' element={<Soda />} />
        </Routes>
      </div>
    );
  }
}

export default App;
