import BoxList from './BoxList';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render(){
  return (
    <div>
      {/* <Box height={10} width={20} color="purple" />
      <Box height={20} width={15} color="teal" /> */}
      <BoxList />
    </div>
  );
 }
}

export default App;
