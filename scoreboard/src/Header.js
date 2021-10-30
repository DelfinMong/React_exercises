import React from "react"
import PropType from "prop-types";
import Stats from "./Stats"
import Stopwatch from "./Stopwatch"

const Header = ({players,title}) => {
    
    return (
     <header>
       <Stats players={players}/>
       <h1>{title}</h1>
       <Stopwatch/>
     </header>
    )
  }

Header.PropType = {
  title: PropType.string,
  players: PropType.arrayOf(PropType.object)
}

Header.defaultProps = {
  title: "Scoreboard"
}

export default Header;