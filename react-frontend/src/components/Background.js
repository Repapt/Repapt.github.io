import React from 'react';

class Background extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dashes: [],
    }

    this.addDash = this.addDash.bind(this)
  }

  componentDidMount() {
    this.interval = setInterval(this.addDash, Math.random()*800)
  }

  addDash() {
    const speed = parseInt(Math.random()*10) + 1;
    const position = parseInt(Math.random()*80) + 10;
    const height = parseInt(Math.random()*100) + 25;
    const width = parseInt(Math.random()*8) + 4;
    this.setState(state => ({
      dashes: [...state.dashes, [speed, position, height, width]]
    }));
  }

  render() {
    return (
      <div className="background">
        {this.state.dashes.map(dash => (
          <div 
            className="dash"
            style={
              {
                animationDuration: dash[0] + 's',
                left: dash[1] + 'vw',
                height: dash[2] + 'px',
                width: dash[3] + 'px',
              }
            }
          ></div>
        ))}
      </div>
    );
  }

}

export default Background