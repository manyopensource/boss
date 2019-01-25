import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberEmploymentDetails } from './../../../actions';
import EmploymentForm from './../components/EmploymentForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember,
    venues: state.venues,
    staffTypes: state.staffTypes,
    payRates: state.payRates
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateStaffMemberEmploymentDetails
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmploymentForm);
