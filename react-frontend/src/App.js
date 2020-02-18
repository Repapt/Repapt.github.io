import React from 'react';

import TabManager from './components/TabManager';

import './App.css'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <TabManager>
          <div label="Home">
            <h1> Hi, I'm Samuel </h1>
          </div>
          <div label="About">
            <h1> About Me</h1>
            <p>Currently studying computer engineering at the University of Waterloo</p>
            <p>Big Marvel fan.</p>
          </div>
          <div label="Skills">
            <h1> All My Skills </h1>
          </div>
          <div label="Contact">
            <h1> Where To Find Me </h1>
          </div>
        </TabManager>
      </div>
    )
  }
}

export default App;
