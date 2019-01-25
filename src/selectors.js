import { createSelector } from 'reselect';

export const getStaffMembers = state => state.staffMembers;
export const getStaffMember = state => state.staffMember;
export const getStaffTypes = state => state.staffTypes;
export const getVenues = state => state.venues;
export const getPayRates = state => state.payRates;
export const getGenderValues = state => state.genderValues;

export const getStaffMembersData = createSelector(
  getStaffMembers,
  getStaffTypes,
  getVenues,
  (staffMembers, staffTypes, venues) =>
    staffMembers.data.map(member => {
      const staffType = staffTypes.data.find(
        type => type.id === member.staffTypeId
      );
      const masterVenue = venues.data.find(
        venue => venue.id === member.masterVenueId
      );
      return { ...member, staffType, masterVenue };
    })
);

export const getVenuesForSelect = createSelector(
  getVenues,
  venues => {
    return venues.data.map(item => ({
      label: item.name,
      value: item.id
    }));
  }
);

export const getStaffTypesForSelect = createSelector(
  getStaffTypes,
  staffTypes => {
    return staffTypes.data.map(item => ({
      label: item.name,
      value: item.id
    }));
  }
);

export const getPayRatesForSelect = createSelector(
  getPayRates,
  payRates => {
    return payRates.data.map(item => ({
      label: item.name,
      value: item.id
    }));
  }
);

export const getGenderValuesForSelect = createSelector(
  getGenderValues,
  genderValues => {
    return genderValues.data.map(item => ({
      label: item.slice(0, 1).toUpperCase() + item.slice(1, item.length),
      value: item
    }));
  }
);
