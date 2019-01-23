import { connect } from 'react-redux';
import PersonalForm from './../components/PersonalForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember,
    genderValues: state.genderValues
  };
};

export default connect(mapStateToProps)(PersonalForm);
