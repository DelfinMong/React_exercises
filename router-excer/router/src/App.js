import React,{Component} from 'react'
import About from './component/About'
import Contact from './component/Contact';
import Dog from './component/Dog';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {page: 'about'}
  }
  changePage(newPage){
    this.setState({page: newPage})
  }
  renderPage(){
    if(this.state.page === 'about') return <About />;
    else if (this.state.page === 'dog') return <Dog />;
    else if (this.state.page === 'contact') return <Contact />
  }
  render(){
    return (
      <div className="App">
        <nav className='App-nav'>
          <a onClick = { () => this.changePage('about')}>About</a>
          <a onClick = { () => this.changePage('dog')}>Dog</a>
          <a onClick = { () => this.changePage('contact')}>Contact</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
