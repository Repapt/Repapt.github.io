import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2>I've always been a passionate person.</h2>
          <p className="body">
            As a kid, I was obsessed with puzzles. It started off with the rubik's cube, but as I grew older,
            I started gravitating towards a slightly different kind of puzzle; the kind that was written in lines of python.
            I've wanted to be a programmer ever since. Today, I love web
            design, making games, backend development, and machine learning. My free time is spent on TV shows,
            swimming, cooking, and playing guitar. I'm an easy cry at the movies (especially if it's animated!)
            and I'm a huge Marvel nerd.
          </p>
          <p className="body">&nbsp;</p>
          <p className="body">
            These passions have characterized my life. Right now, I'm looking forward to my next one.
          </p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;