import React from "react"
import PropType from "prop-types";

function Counter ({ index,score,changeScore}) {
    
    return (
        <div className="counter">
          <buttom className="counter-action decrement" onClick={() => changeScore(index,-1)}> - </buttom>
          <buttom className="counter-score"> {score} </buttom>
          <buttom className="counter-action increment" onClick={() => changeScore(index,1)}> + </buttom>
        </div>
    )
  } 

Counter.prototype = {
  index: PropType.number,
  score: PropType.number,
  changeScore: PropType.func
};

export default Counter;

// { binding }

// this.incrementScore.bind(this)

// this.incrementScore = {this.incrementScore.bind(this)}  force biding

// onClick={() => this.incrementScore()}

// use arrow function handling events ( need to bind this)


 // incrementScore = () => {
 //     this.setState( prevStaste => ({
 //         score: prevStaste.score +1 
 //        }))
 // }