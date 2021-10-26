import React from "react"
import Counter from "./Counter"


class Player extends React.Component  {
    render() {
    return (
      <div className="player">
        <span className="player-name"> {this.props.name} </span>
        <Counter score/>
      </div>
    )
    }
  }

  export default Player