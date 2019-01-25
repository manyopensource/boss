import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberPersonalDetails } from './../../../actions';
import PersonalForm from './../components/PersonalForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember,
    genderValues: state.genderValues
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
