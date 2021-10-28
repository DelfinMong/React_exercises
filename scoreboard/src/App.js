import './App.css';
import Player from "./Player"
import Header from "./Header"
import AddPlayerForm from './AddPlayerForm';
// import InitiaPlayers from "./InitiaPlayers"
import React, {Component} from 'react';

class App extends Component {
     state = {
        players : [
          {
            name: "Guil",
            score: 0,
            id: 1
          },
          {
            name: "Treasure",
            score: 0,
            id: 2
          },
          {
            name: "Ashley",
            score: 0,
            id: 3
          },
          {
            name: "James",
            score: 0,
            id: 4
          }
        ]
    }
 
  
  handleScoreChange = (index,delta) => {
    this.setState( prevStaste => {
        return {
        score : prevStaste.players[index].score += delta
        }
    })
   
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id )
      };
    })
  }
  
  render(){
    return (
    <div className="scoreboard">
       <Header
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}

        {/* Each loop represents one player. The index(idx allows us to identify the each player)*/}
        {this.state.players.map((player,index) => 
          <Player 
            key={player.id.toString()}
            id={player.id} 
            index={index}
            name={player.name}
            score={player.score} 
            changeScore={this.handleScoreChange}
            removePlayer = {this.handleRemovePlayer}
          />
        )
        }
        <AddPlayerForm/>
    </div>
      )
    }
  }


export default App;


