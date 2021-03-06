import Reat, { Component} from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render(){
    const dogLinks = this.props.dogs.map( dog => (
      <li>
      <NavLink exact to={`/dogs/${dog.name}`} className='nav-link' key={dog.name}>
         {dog.name}
      </NavLink>
      </li>
    ))
    return(
    <nav className='navbar Navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        Dog App
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        arial-controls='navbarNav'
        arial-expanded='false'
        arial-label='Toggle navigation'
      >
        <span className='navbar-toggle-icon'/>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
        <li>
          <NavLink exact to='./dogs' className='nav-link'>
            Home
          </NavLink>
        </li>
         {dogLinks}
        </ul>
      </div>
    </nav>
    )
  }
}

export default Navbar;




























{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}