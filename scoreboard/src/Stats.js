import React from 'react'
import PropType from "prop-types";


const Stats = (props) => {

    const totalPlayer = props.players.length;
    const totalPoints = props.players.reduce( (total, player) => {
        return total + player.score;
    }, 0);
    
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayer}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
      </table>
    );
}

Stats.prototype = {
    players: PropType.arrayOf(PropType.shape({
        score: PropType.number
    }))
}

export default Stats