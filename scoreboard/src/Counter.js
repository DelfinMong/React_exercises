import React,{Component} from "react"

class Counter extends React.Component {
    render() {
    return (
        <div className="counter">
          <buttom className="counter-action decrement"> - </buttom>
          <buttom className="counter-score"> {this.props.score} </buttom>
          <buttom className="counter-action increment"> + </buttom>
        </div>
    )
  } 
}

export default Counter