import './App.css';
import Player from "./Player"
import Header from "./Header"



function App() {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        totalPlayer={1}
      />

      {/* Players list */}
      <Player name="Guil" score={50}/>
      <Player name="Treasure" score={90}/>
      <Player name="Ashley" score={85}/>
      <Player name="James" score={80}/>
    </div>
  );
}

export default App;


