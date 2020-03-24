import React from 'react';

import about_profile from './../../res/samuel_about.png';

class About extends React.Component {
  
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2 className="title">I've always been driven by my passions.</h2>
          <p className="body">Growing up, I loved solving puzzles. I've played with everything from rubik's cubes and riddles</p>
          <p className="body">to escape rooms and video games. Inevitably, though, my passions eventually shifted to a slightly</p>
          <p className="body">different form of problem-solving: programming. As a result, I've worked with backend development,</p>
          <p className="body">web design, UI/UX, and machine learning. In my free time, I enjoy swimming, basketball, cooking,</p>
          <p className="body">and guitar. I'm always listening to music - it's usually rock, but I'm willing to listen to anything.</p>
          <p className="body">I'm an easy cry at the movies (especially if it's animated!) and I'm a huge Marvel nerd.</p>
          <p className="body">These passions have characterized my life. Now, I'm looking for my next one.</p>
          <img className="profile" src={about_profile} alt="Profile"></img>
        </div>
      </div>
    );
  }
}

export default About;