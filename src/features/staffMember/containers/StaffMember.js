import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStaffMember } from './../../../actions';
import StaffMember from './../components/StaffMember';
import {
  getStaffMember,
  getStaffTypes,
  getVenues,
  getPayRates,
  getGenderValues
} from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state),
    staffTypes: getStaffTypes(state),
    venues: getVenues(state),
    payRates: getPayRates(state),
    genderValues: getGenderValues(state)
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
