import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStaffMember } from './../../../actions';
import StaffMember from './../components/StaffMember';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember,
    staffTypes: state.staffTypes,
    venues: state.venues,
    payRates: state.payRates,
    genderValues: state.genderValues
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadStaffMember
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffMember);
