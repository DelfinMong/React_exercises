import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    // this.handleBack = this.handleBack.bind(this);
  }
  handleLogin() {
    alert("LOGGED YOU IN!");
    this.props.history.push("/food/salmon");
  }
  // handleBack(){
  //   this.props.history.goBack();
  // }

  render() {
    return (
      <div className='Navbar'>
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={this.props.history.goBack}>go back</button>
      </div>
    );
  }
}
export default withRouter(Navbar);
// export default Navbar

// withRouter use for components with out routes. 