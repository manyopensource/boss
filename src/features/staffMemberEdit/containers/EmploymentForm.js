import { connect } from 'react-redux';
import EmploymentForm from './../components/EmploymentForm';

const mapStateToProps = state => {
  return {
    staffMember: state.staffMember,
    venues: state.venues,
    staffTypes: state.staffTypes,
    payRates: state.payRates
  };
};

export default connect(mapStateToProps)(EmploymentForm);
