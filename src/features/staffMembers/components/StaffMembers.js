import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dashboard from './Dashboard';
import Content from './../../Content';
import Table from './Table';
import TableRow from './TableRow';

class StaffMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount() {
    this.props.loadStaffMembers().then(() => {
      this.setState({
        isLoaded: true
      });
    });
  }

  render() {
    return (
      <>
        <Dashboard />
        <Content>
          <Table>
            {this.state.isLoaded
              ? this.props.staffMembersData.map(member => {
                  return <TableRow key={member.id} member={member} />;
                })
              : ' Loading'}
          </Table>
        </Content>
      </>
    );
  }
}

StaffMembers.propTypes = {
  loadStaffMembers: PropTypes.func.isRequired,
  staffMembers: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  staffTypes: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }),
  venues: PropTypes.shape({
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  })
};

export default StaffMembers;
