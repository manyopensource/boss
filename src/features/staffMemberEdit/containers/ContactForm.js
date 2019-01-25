import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateStaffMemberContactDetails } from './../../../actions';
import ContactForm from './../components/ContactForm';

import { getStaffMember } from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMember: getStaffMember(state)
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
