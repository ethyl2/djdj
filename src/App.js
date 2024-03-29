import React from 'react';
import './App.scss';
import {Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import GrayLogo from './images/DJDJCircleLogo-gray.png';
import Pricing from './components/Pricing';
import Planning from './components/Planning';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <nav>
          <div className="img-container">
            <img src={GrayLogo}  alt="DJDJ logo"/>
          </div>
          <div className="nav-items">
          <NavLink exact activeClassName='active' to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/about'>About Us</NavLink>
          <NavLink activeClassName='active' to='/pricing'>Pricing</NavLink>
          <NavLink activeClassName='active' to='/plan'>Start Planning</NavLink>
          <NavLink activeClassName='active' to='/reviews'>Reviews</NavLink>
          <NavLink activeClassName='active' to='/contact'>Contact Us</NavLink>
      
          </div>
        </nav>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/contact' component={Contact} />
      <Route path='/plan' component={Planning} />
      <Route path='/reviews' component={Reviews} />

      <Footer />
    </div>
  );
}

export default App;
