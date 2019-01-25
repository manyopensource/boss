import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberContactDetails } from './../../../actions';
import ContactForm from './../components/ContactForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateStaffMemberContactDetails
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactForm);
