import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2 className="title">I've always been driven by my passions.</h2>
          <p className="body">Growing up, I loved solving puzzles. I've played with everything from rubik's cubes to</p>
          <p className="body">escape rooms and video games. Inevitably, though, my passions eventually shifted to a</p>
          <p className="body">slightly different form of problem-solving: programming. I've worked with web design, backend</p>
          <p className="body">development, and machine learning. In my free time, I enjoy swimming, basketball, cooking,</p>
          <p className="body">and guitar. I'm always listening to music - it's usually rock, but I can listen to anything.</p>
          <p className="body">I'm an easy cry at the movies (especially if it's animated!) and I'm a huge Marvel nerd.</p>
          <p className="body">These passions have characterized my life. Now, I'm looking for my next one.</p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;