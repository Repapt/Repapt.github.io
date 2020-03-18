import React from 'react';

import profile from './../../res/samuel.png';
import resume from './../../res/resume.pdf';

class Home extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="text">
          <h1 className="title">Hi, I'm Samuel.</h1>
          <h2>I'm a Computer Engineering student</h2>
          <h2>at the University of Waterloo.</h2>
        </div>
        <a className="button" href={ resume } target="_blank">Resume</a>
        <a className="button" href="https://www.github.com/Repapt" target="_blank">Github</a>
        <img className="profile" src={profile} alt="Profile"/>
      </div>
    );
  }
}

export default Home;
