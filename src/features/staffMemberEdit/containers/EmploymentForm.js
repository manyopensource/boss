import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberEmploymentDetails } from './../../../actions';
import EmploymentForm from './../components/EmploymentForm';
import {
  getStaffMember,
  getStaffTypes,
  getVenues,
  getPayRates
} from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state),
    venues: getVenues(state),
    staffTypes: getStaffTypes(state),
    payRates: getPayRates(state)
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
