import React from 'react';

import { ReactComponent as HomeIcon } from './../res/home.svg';
import { ReactComponent as AboutIcon } from './../res/about.svg';
import { ReactComponent as SkillsIcon } from './../res/skills.svg';
import { ReactComponent as ExperienceIcon } from './../res/experience.svg';
import { ReactComponent as ContactIcon } from './../res/contact.svg';

class NavBarItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isHovered: false,
    };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState(state => ({
      isHovered: !state.isHovered
    }));
  }

  render() {

    return (
      <div>
        <div className="nav-bar-title" 
          onMouseEnter={ this.toggleHover } 
          onMouseLeave={ this.toggleHover }
          style={ {display: (this.state.isHovered ? 'initial' : 'none')} }
        >
          { this.props.page }
        </div>

        <div 
          className="nav-bar-icon" 
          onMouseEnter={ this.toggleHover } 
          onMouseLeave={ this.toggleHover }
        >
          {
            {
              'Home': <HomeIcon/>,
              'About': <AboutIcon/>,
              'Skills': <SkillsIcon/>,
              'Experience': <ExperienceIcon/>,
              'Contact': <ContactIcon/>
            } [this.props.page]
          }
        </div>
      </div>
    );
  }

}

export default NavBarItem;
