import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div className="boss-table boss-table_page_staff-members-index">{this.props.children}</div>
    );
  }
}

export default Table;
