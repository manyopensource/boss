import React, { Component } from 'react';

class ContentLeft extends Component {
  render() {
    return (
      <aside className="boss-content-switcher__side">
        {this.props.children}
      </aside>
    );
  }
}

export default ContentLeft;
