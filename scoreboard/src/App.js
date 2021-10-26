import './App.css';
import Player from "./Player"
import Header from "./Header"
import InitiaPlayers from "./InitiaPlayers"


function App() {

  const playerCount = InitiaPlayers.length

  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayer={playerCount}
      />

      {/* Players list */}

      {InitiaPlayers.map(player => 
        <Player 
          key={player.id.toString()} 
          name={player.name} 
          score={player.score} />
      )
      }
     
    </div>
  );
}

export default App;


