import React,{PureComponent} from "react"
import PropTypes from "prop-types";
import Counter from "./Counter"


class Player extends PureComponent  {

    static propTypes = {
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
      index: PropTypes.number.isRequired,
      removePlayer: PropTypes.func,
      changeScore: PropTypes.func
    }

    render() {

      const {
        name,
        id,
        score,
        index,
        removePlayer,
        changeScore
      } = this.props;

      return (
        <div className="player">
          <span className="player-name"> 
            <button className="remove-player" 
                onClick={() => removePlayer(id)}> X </button>
            {name} 
          </span>
          <Counter
          score={score}
          changeScore={changeScore}
          index={index}
          />
        </div>
      )
    }
  }

 

  export default Player;