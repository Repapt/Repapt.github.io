import React from 'react';

import profile from './../../res/samuel.png';
import resume from './../../res/resume2.pdf';

class Home extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="home-text">
          <h1>Hi, I'm Samuel.</h1>
          <h3>I'm a Computer Engineering student</h3>
          <h3>at the University of Waterloo.</h3>
        </div>
        <a className="button" href={ resume } target="_blank" rel="noopener noreferrer">Resume</a>
        <a className="button" href="https://www.github.com/Repapt" target="_blank" rel="noopener noreferrer">Github</a>
        <img className="profile" src={profile} alt="Profile"/>
      </div>
    );
  }
}

export default Home;
