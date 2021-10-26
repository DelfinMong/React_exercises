import React from "react"

class Counter extends React.Component {

    constructor(){
        super()
        this.state = {
            score : 0
        }
    }
    render() {
    return (
        <div className="counter">
          <buttom className="counter-action decrement"> - </buttom>
          <buttom className="counter-score"> {this.state.score} </buttom>
          <buttom className="counter-action increment"> + </buttom>
        </div>
    )
  } 
}

export default Counter