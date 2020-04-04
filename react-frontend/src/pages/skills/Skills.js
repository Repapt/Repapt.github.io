import React from 'react';

class Skills extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="text">
          <h2 className="skills-title">Skills</h2>
          <div className="category">
            <h4>Languages:</h4>
            <div className="skill">Python</div>
            <div className="skill">Java</div>
            <div className="skill">C++</div>
            <div className="skill">C</div>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
          </div>
          <div className="category">
            <h4>Frameworks/Libraries: </h4>
            <p>ReactJS, Flask, PostgreSQL, MySQL, JavaFX, Java Swing</p>
          </div>
          <div className="category">
            <h4>Tools: </h4>
            <p>Version Control (Git), Scripting (Bash, Powershell), Jira</p>
          </div>
          <div className="category">
            <h4>Other: </h4>
            <p>REST APIs, Linux, Windows OS, Adobe Creative Suite, Microsoft Office</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
