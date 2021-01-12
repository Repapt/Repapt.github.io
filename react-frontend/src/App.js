import React from 'react';
import {HashRouter, NavLink, Route } from 'react-router-dom';

import { ReactComponent as Logo } from './res/logo_sl.svg';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';
import NavBarItem from './components/NavBarItem';
import Background from './components/Background';

//test

import './css/App.css'
import './css/Page.css'
import './css/NavBar.css'
import './css/Background.css'

class App extends React.Component{
  render() {
    return (
      <HashRouter>
        <div className="app">
          <div className="nav-bar">
            <NavLink exact className="nav-bar-item" to="/"><div className="logo"><Logo/></div></NavLink>
            <NavLink exact className="nav-bar-item" to="/"><NavBarItem page="Home"/></NavLink>
            <NavLink className="nav-bar-item" to="/about"><NavBarItem page="About"/></NavLink>
            <NavLink className="nav-bar-item" to="/skills"><NavBarItem page="Skills"/></NavLink>
            <NavLink className="nav-bar-item" to="/contact"><NavBarItem page="Contact"/></NavLink>
          </div>
          <div className="content">
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/skills" component={ Skills }/>
            <Route path="/contact" component={ Contact }/>
          </div>
          <Background/>
        </div>  
      </HashRouter>
    )
  }
}

export default App;
