import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStaffMembers } from './../../../actions';
import StaffMembers from './../components/StaffMembers';
import {
  getStaffMembers,
  getStaffTypes,
  getVenues
} from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMembers: getStaffMembers(state),
    staffTypes: getStaffTypes(state),
    venues: getVenues(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadStaffMembers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffMembers);
