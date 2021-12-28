import React,{Component} from 'react'
import About from './About'
import Contact from './Contact';
import Dog from './Dog';
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
