import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2 className="title">I've always been driven by my passions.</h2>
          <p className="body">Growing up, I loved solving puzzles, whether it be rubik's cubes, riddles, or some sort</p>
          <p className="body">of video game. In high school, my passions shifted to a slightly different form of</p>
          <p className="body">problem-solving: programming. I've worked with web design, algorithms/complexity,</p>
          <p className="body">backend development, UI/UX, and machine learning. I enjoy swimming, basketball, cooking,</p>
          <p className="body">and guitar. I'm always listening to music - it's usually rock, but I'll listen to anything.</p>
          <p className="body">I'm an easy cry at the movies (especially if it's animated!) and I'm a huge Marvel nerd.</p>
          <p className="body">These passions have characterized my life. Now, I'm looking for my next one.</p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;