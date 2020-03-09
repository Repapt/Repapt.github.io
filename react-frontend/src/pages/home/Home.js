import React from 'react';

import profile from './../../res/samuel.png';

class Home extends React.Component {

  render() {
    return (
      <div className="page">
        <img className="profile" src={profile} alt="Profile"/>
        <h1>Hi, I'm Samuel.</h1>
      </div>
    );
  }
}

export default Home;
