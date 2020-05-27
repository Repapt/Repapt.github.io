import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2>I was always a passionate person.</h2>
          <p className="body">
            As a kid, my passion was for puzzles. I've spent countless hours of my childhood fiddling with
            Rubik's Cubes, board games - anything I could get my hands on.
            Going into high school, my puzzle-loving
            brain pushed me to take a computer science course, where I became acquainted with the world of competitive programming.
            I've wanted to be a programmer ever since. Today, I love web
            design, making games, backend development, and machine learning. My free time is spent on TV shows,
            swimming, cooking, and playing guitar. I'm an easy cry at the movies (especially if it's animated!)
            and I'm a huge Marvel nerd.
          </p>
          <p className="body">&nbsp;</p>
          <p className="body">
            These passions have characterized my life. Now, I'm looking forward to my next one.
          </p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;
