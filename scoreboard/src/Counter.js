import React from "react"

function Counter (props) {
    return (
        <div className="counter">
          <buttom className="counter-action decrement"> - </buttom>
          <buttom className="counter-score"> {props.score} </buttom>
          <buttom className="counter-action increment"> + </buttom>
        </div>
    )
}

export default Counter