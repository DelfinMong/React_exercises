import React from "react"


const Player = () => {
    return (
      <div className="player">
        <span className="player-name"> Guil </span>
        <div className="counter">
          <buttom className="counter-action decrement"> - </buttom>
          <buttom className="counter-score"> 35 </buttom>
          <buttom className="counter-action increment"> + </buttom>
        </div>
      </div>
    )
  }

  export default Player