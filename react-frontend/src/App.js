import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Skills from './pages/skills/Skills';
import Contact from './pages/contact/Contact';

import './css/App.css'
import './css/Page.css'

class App extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="nav-bar">
            <NavLink exact className="nav-bar-item" to="/">Home</NavLink>
            <NavLink className="nav-bar-item" to="/about">About</NavLink>
            <NavLink className="nav-bar-item" to="/skills">Skills</NavLink>
            <NavLink className="nav-bar-item" to="/contact">Contact</NavLink>
          </div>
          <div className="content">
            <Route exact path="/" component={ Home }/>
            <Route path="/about" component={ About }/>
            <Route path="/skills" component={ Skills }/>
            <Route path="/contact" component={ Contact }/>
          </div>
        </div>  
      </BrowserRouter>
    )
  }
}

export default App;
