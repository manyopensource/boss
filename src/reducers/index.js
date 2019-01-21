import { combineReducers } from 'redux';
import staffMembers from './StaffMembersReducer';
import staffMember from './StaffMemberReducer';
import staffTypes from './StaffTypesReducer';
import venues from './VenuesReducer';
import payRates from './PayRatesReducer';
import genderValues from './GenderValuesReducer';

export default combineReducers({
  staffMembers,
  staffMember,
  staffTypes,
  venues,
  payRates,
  genderValues
});
