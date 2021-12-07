import './App.css';
import WiseSquare from './WiseSquareWithProps'
import AnnoyingForm from './AnnoyingForm'
import CopyDemo from './CopyDemo';
import ButtonLit from './ButtonList';
import NumberList from './NumberList';
import BetterNumberList from './BetterNumberList'

function App() {
  return (
    <div className="App">
      Biding Demo
      <NumberList />
      <BetterNumberList />
      <ButtonLit />
      <WiseSquare />
      <AnnoyingForm />
      <CopyDemo />
    </div>
  );
}

export default App;
