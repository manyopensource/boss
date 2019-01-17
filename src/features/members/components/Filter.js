import React, { Component } from 'react';
import FilterForm from './FilterForm';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFilterOpened: false
    };
  }

  handleToggleFilter = () => {
    this.setState({
      isFilterOpened: !this.state.isFilterOpened
    });
  };

  render() {
    return (
      <div className="boss-showdown">
        <div className="boss-dropdown__header">
          <div
            className={
              this.state.isFilterOpened
                ? 'boss-dropdown__switch boss-dropdown__switch_role_filter boss-dropdown__switch_state_opened'
                : 'boss-dropdown__switch boss-dropdown__switch_role_filter'
            }
            onClick={this.handleToggleFilter}
          >
            Filter
          </div>
        </div>
        <div
          className={
            this.state.isFilterOpened
              ? 'boss-dropdown__content boss-dropdown__content_state_opened'
              : 'boss-dropdown__content'
          }
        >
          <div className="boss-dropdown__content-inner">
            <FilterForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
