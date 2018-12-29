import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentLeft from './ContentLeft';
import ContentMain from './ContentMain';

class Content extends Component {
  render() {
    return (
      <div className="boss-page-main__content">
        <div className="boss-page-main__inner">
          <div className="boss-content-switcher">
            <div className="boss-content-switcher__inner">
              <ContentLeft links={this.props.links} />
              <ContentMain />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  links: PropTypes.array.isRequired
};

export default Content;
