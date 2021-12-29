import React, { Component } from "react";
import "../css/Message.css";

class Message extends Component {
  render() {
    return <div  className={ ({ isActive }) => isActive ? "Message":  "  " } >
        {this.props.children}
      </div>;
  }
}
export default Message;
