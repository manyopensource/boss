import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

class Nav extends Component {
  render() {
    return (
      <nav className="boss-content-switcher__nav">
        {this.props.links.map(link => {
          return <NavLink link={link} />;
        })}
      </nav>
    );
  }
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
