import React from "react"

class Counter extends React.Component {

    render() {
        let index = this.props.index;
    return (
        <div className="counter">
          <buttom className="counter-action decrement" onClick={() => this.props.changeScore(index,-1)}> - </buttom>
          <buttom className="counter-score"> {this.props.score} </buttom>
          <buttom className="counter-action increment" onClick={() => this.props.changeScore(index,1)}> + </buttom>
        </div>
    )
  } 
}

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