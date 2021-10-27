import React from 'react'


const Stats = (props) => {

    const totalPlayer = props.players.length;
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayer}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>0</td>
                </tr>
            </tbody>
      </table>
    );
}

export default Stats