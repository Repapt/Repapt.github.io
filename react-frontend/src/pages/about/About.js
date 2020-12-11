import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2>About me</h2>
          <p className="body">
            A reliable and independent critical thinker with an attention to detail, I first started programming by competing in various coding competitions.
            Since then, I've branched out into web design, creating games, and whatever else piques my interest.
          </p>
          <p className="body">
            I spend my free time on TV shows,
            video games, swimming, cooking, and playing guitar. I'm a sucker for animated movies,
            and I'm kind of a Marvel nerd.
            TEST TEST TEST
          </p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;
