import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <div className="boss-content-switcher">
            <div className="boss-content-switcher__inner">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
