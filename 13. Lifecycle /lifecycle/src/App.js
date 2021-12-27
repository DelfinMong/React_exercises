import React,{Component} from 'react'
import About from './component/About'
import Contact from './component/Contact';
import Dog from './component/Dog';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <h1>Life cycle</h1>
        <About />
        </div>
    );
  }
}

export default App;
