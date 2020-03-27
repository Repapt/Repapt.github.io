import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2>I've always been driven by my passions.</h2>
          <p className="body">As a kid, I loved solving puzzles. Rubik's cubes and crosswords were among my favourites. Going</p>
          <p className="body">into high school, I still loved puzzles but the problems I was solving were no longer found on the</p>
          <p className="body">backs of newspapers, and the solutions were written in lines of Java. Today, I love web design, making</p>
          <p className="body">games, backend development, and machine learning. My free time is spent on TV shows, swimming,</p>
          <p className="body">cooking, and playing guitar. I'm always listening to music, though admittedly a bit too loudly at times.</p>
          <p className="body">I'm an easy cry at the movies (especially if it's animated!) and I'm a huge Marvel nerd.</p>
          <p className="body">&nbsp;</p>
          <p className="body">These passions have characterized my life. Now, I'm looking forward to my next one.</p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;