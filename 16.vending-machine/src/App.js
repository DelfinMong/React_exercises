import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Chips from './component/Chips';
import Sardines from './component/Sardines';
import Soda from './component/Soda';
import VendingMachine from './component/VendingMachine';
import Navbar from './component/Navbar';
import './App.css';

class App extends Component{
    render(){
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/soda' element={<Soda />} />
          <Route path='/sardines' element={<Sardines />} />
          <Route path='/chips' element={<Chips />} />
        </Routes>
      </div>
    );
  }
}

export default App;
