import React,{Component} from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import About from './component/About'
import Contact from './component/Contact';
import Dog from './component/Dog';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
          <nav className='App-nav'>
            <NavLink className={({ isActive }) => isActive? "active-link": ''} to='/'>About</NavLink>
            <NavLink className={({ isActive }) => isActive? "active-link": ''} to='/dog'>Dog</NavLink>
            <NavLink className={({ isActive }) => isActive? "active-link": ''} to='/contact'>Contact</NavLink>

            {/* <Link to='/'>About</Link>
                <Link to='/dog'>Dog</Link>
                <Link to='/contact'>Contact</Link> */
            }

            {/* <a href='/'>About</a>
                <a href='/dog'>Dog</a>
                <a href='/contact'>Contact</a> */
            }
          </nav>
          <Routes>
            <Route exact path='/' element={<About/>} />
            <Route path='/dog' element={<Dog name={'Muffins'}/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
      </div>
    );
  }
}

export default App;

// in react-router-dom v6, "Switch" is replaced by routes "Routes"
