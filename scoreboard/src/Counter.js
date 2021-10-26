import React from "react"

class Counter extends React.Component {

    constructor(){
        super()
        this.state = {
            score : 0
        }
    }

    incrementScore =() => {
        this.setState({
           score: this.state.score +1
        })
    }

    decrementScore = () => {
        this.setState({
            score : this.state.score -1
        })
    }

    render() {
    return (
        <div className="counter">
          <buttom className="counter-action decrement" onClick={this.decrementScore}> - </buttom>
          <buttom className="counter-score"> {this.state.score} </buttom>
          <buttom className="counter-action increment" onClick={this.incrementScore}> + </buttom>
        </div>
    )
  } 
}

export default Counter

// { binding }
// onClick={this.incrementScore.bind(this)}
// onClick={() => this.incrementScore()}

// use arrow function handling events ( need to bind this)