import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadStaffMembers } from './../../../actions';
import FilterForm from './../components/FilterForm';
import {
  getStaffMembers,
  getStaffTypes,
  getVenues,
  getVenuesForSelect,
  getStaffTypesForSelect,
  getPayRatesForSelect
} from './../../../selectors';

const mapStateToProps = state => {
  return {
    staffMembers: getStaffMembers(state),
    staffTypes: getStaffTypes(state),
    venues: getVenues(state),
    venuesForSelect: getVenuesForSelect(state),
    staffTypesForSelect: getStaffTypesForSelect(state),
    payRatesForSelect: getPayRatesForSelect(state)
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadStaffMembers
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterForm);
