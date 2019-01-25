import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberPersonalDetails } from './../../../actions';
import PersonalForm from './../components/PersonalForm';
import {
  getStaffMember,
  getGenderValues,
  getGenderValuesForSelect
} from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state),
    genderValues: getGenderValues(state),
    genderValuesForSelect: getGenderValuesForSelect(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateStaffMemberPersonalDetails
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalForm);
