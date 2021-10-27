import React from "react"
import Counter from "./Counter"


class Player extends React.Component  {
    render() {
    return (
      <div className="player">
        <span className="player-name"> 
          <button className="remove-player" 
               onClick={() => this.props.removePlayer(this.props.id)}> X </button>
          {this.props.name} 
        </span>
        <Counter
         score={this.props.score}
         changeScore={this.props.changeScore}
         index={this.props.index}
         />
      </div>
    )
    }
  }

  export default Player;