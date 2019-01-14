import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

class Nav extends Component {
  onSetActiveChapter = chapter => {
    this.props.setActiveChapter(chapter);
  }

  render() {
    return (
      <nav className="boss-content-switcher__nav">
        {this.props.links.map((link, index) => {
          return <NavLink key={index} link={link} activeChapter={this.props.activeChapter} setActiveChapter={this.onSetActiveChapter} />;
        })}
      </nav>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
