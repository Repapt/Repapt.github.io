import React from 'react';

import profile from './../../res/samuel.png';

class Home extends React.Component {

  render() {
    return (
      <div className="page">
        <img className="profile" src={profile} alt="Profile"/>
        <h1>Hi, I'm Samuel.</h1>
        <h2>I'm a Computer Engineering student</h2>
        <h2>at the University of Waterloo.</h2>
      </div>
    );
  }
}

export default Home;
