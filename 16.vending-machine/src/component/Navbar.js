import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className={({ isActive }) => isActive ? "Navbar": " "}>
        <NavLink className={({ isActive }) => isActive ? "Navbar": " "}to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "Navbar": " "}to='/chips'>
          Chips
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "Navbar": " "}to='/soda'>
          Soda
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "Navbar": " "}to='/sardines'>
          Sardines
        </NavLink>
      </div>
    );
  }
}
export default Navbar;
