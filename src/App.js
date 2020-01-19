import React from 'react';
import './App.scss';
import {Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Logo from './images/DJDJCircleLogo.png';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="img-container">
          <img src={Logo}  alt="DJDJ logo"/>
        </div>
        <div className="nav-items">
        <NavLink activeClassName='.active' to='/'>Home</NavLink>
        <NavLink activeClassName='.active' to='/about'>About Us</NavLink>
        <NavLink activeClassName='.active' to='/pricing'>Pricing</NavLink>
        <NavLink activeClassName='.active' to='/contact'>Contact Us</NavLink>
    
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/contact' component={Contact} />

    </div>
  );
}

export default App;
