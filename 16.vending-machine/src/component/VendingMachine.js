import { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/VendingMachine.css';
import vendingMachineImg from '../img/VendingMachine.png';

class VendingMachine extends Component{
    render(){
    return (
      <div
      className={ ({ isActive }) => isActive ? "VendingMachine":  "  " }
      style={{ backgroundImage: `url(${vendingMachineImg})` }}
      >
      <h1>hello i am vending maching. what would you like to eat </h1>
      <Link to='/soda'>Soda</Link>
      <Link to='/chips'>Chips</Link>
      <Link to='/sardines'>Sardines</Link>
      </div>
    );
  }
}

export default VendingMachine;