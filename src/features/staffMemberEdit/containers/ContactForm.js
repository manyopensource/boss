import { connect } from 'react-redux';
import ContactForm from './../components/ContactForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember
  };
};

export default connect(mapStateToProps)(ContactForm);
