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
      return {...member, staffType, masterVenue}
    })
);
