import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import '../css/Message.css'
import "../css/Sardines.css";

class Sardines extends Component {
  render() {
    return (
      <div
        className={ ({ isActive }) => isActive ? "Sardines":  "  " }
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
        }}
      >
          <Message  className={ ({ isActive }) => isActive ? "Message":  "  " }>
            <h1>you don't eat the sardines. the sardines, they eat you!</h1>
            <Link to='/'style={{color:'red'}} >Go Back</Link>
          </Message>
      </div>
    );
  }
}

export default Sardines;