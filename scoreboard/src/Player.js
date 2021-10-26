import React from "react"
import Counter,{Component} from "./Counter"


class Player extends React.Component  {
    render() {
    return (
      <div className="player">
        <span className="player-name"> {props.name} </span>
        <Counter score={props.score}/>
      </div>
    )
    }
  }

  export default Player