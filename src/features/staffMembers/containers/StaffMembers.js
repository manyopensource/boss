import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStaffMembers } from './../../../actions';
import StaffMembers from './../components/StaffMembers';

const mapStateToProps = state => {
  return {
    staffMembers: state.staffMembers,
    staffTypes: state.staffTypes,
    venues: state.venues
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
