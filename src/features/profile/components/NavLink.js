import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as A } from 'react-router-dom';

class NavLink extends Component {
  handleClick = e => {
    this.props.setActiveChapter(this.props.link.chapter);
  };

  render() {
    return (
      <A
        to={'/' + this.props.link.chapter}
        activeClassName="boss-content-switcher__nav-link_state_active"
        className="boss-content-switcher__nav-link"
        data-chapter={this.props.link.chapter}
        onClick={this.handleClick}
      >
        {this.props.link.title}
      </A>
    );
  }
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired
};

export default NavLink;
