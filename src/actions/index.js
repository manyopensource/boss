import {
  LOAD_STAFF_MEMBERS_STARTUP,
  LOAD_STAFF_MEMBERS_SUCCESS,
  LOAD_STAFF_MEMBERS_FAILURE,
  LOAD_STAFF_MEMBER_STARTUP,
  LOAD_STAFF_MEMBER_SUCCESS,
  LOAD_STAFF_MEMBER_FAILURE
} from './../constants/ActionTypes';
import { http } from './../utils/HttpService';

export const loadStaffMembersStartup = () => ({
  type: LOAD_STAFF_MEMBERS_STARTUP
});

export const loadStaffMembersSuccess = data => ({
  type: LOAD_STAFF_MEMBERS_SUCCESS,
  payload: data
});

export const loadStaffMembersFailure = () => ({
  type: LOAD_STAFF_MEMBERS_FAILURE
});

export const loadStaffMemberStartup = () => ({
  type: LOAD_STAFF_MEMBER_STARTUP
});

export const loadStaffMemberSuccess = data => ({
  type: LOAD_STAFF_MEMBER_SUCCESS,
  payload: data
});

export const loadStaffMemberFailure = () => ({
  type: LOAD_STAFF_MEMBER_FAILURE
});

export const loadStaffMembers = () => {
  return function(dispatch, getState) {
    dispatch(loadStaffMembersStartup());
    return http
      .getStaffMembers()
      .then(response => {
        if (!response.status || response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(loadStaffMembersSuccess(response.data));

        return response;
      })
      .catch(() => dispatch(loadStaffMembersFailure()));
  };
};

export const loadStaffMember = memberId => {
  return function(dispatch, getState) {
    dispatch(loadStaffMemberStartup());
    return http
      .getStaffMember(memberId)
      .then(response => {
        if (!response.status || response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(loadStaffMemberSuccess(response.data));

        return response;
      })
      .catch(() => dispatch(loadStaffMemberFailure()));
  };
};
