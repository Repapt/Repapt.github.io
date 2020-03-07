import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';
import NavBarItem from './components/NavBarItem';


import './css/App.css'
import './css/Page.css'
import './css/NavBar.css'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="nav-bar">
            <NavLink exact className="nav-bar-item" to="/Personal-Site"><NavBarItem page="Home"/></NavLink>
            <NavLink className="nav-bar-item" to="/Personal-Site/about"><NavBarItem page="About"/></NavLink>
            <NavLink className="nav-bar-item" to="/Personal-Site/skills"><NavBarItem page="Skills"/></NavLink>
            <NavLink className="nav-bar-item" to="/Personal-Site/contact"><NavBarItem page="Contact"/></NavLink>
          </div>
          <div className="background">
          </div>
          <div className="content">
            <Route exact path="/Personal-Site" component={ Home }/>
            <Route path="/Personal-Site/about" component={ About }/>
            <Route path="/Personal-Site/skills" component={ Skills }/>
            <Route path="/Personal-Site/contact" component={ Contact }/>
          </div>
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;
