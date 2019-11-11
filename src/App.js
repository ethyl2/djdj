import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
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
        <Link to='/'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/pricing'>Pricing</Link>
        <Link to='/contact'>Contact Us</Link>
    
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
