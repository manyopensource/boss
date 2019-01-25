import {
  LOAD_STAFF_MEMBERS_STARTUP,
  LOAD_STAFF_MEMBERS_SUCCESS,
  LOAD_STAFF_MEMBERS_FAILURE,
  LOAD_STAFF_MEMBER_STARTUP,
  LOAD_STAFF_MEMBER_SUCCESS,
  LOAD_STAFF_MEMBER_FAILURE,
  UPDATE_STAFF_MEMBER_STARTUP,
  UPDATE_STAFF_MEMBER_SUCCESS,
  UPDATE_STAFF_MEMBER_FAILURE
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

export const updateStaffMemberStartup = () => ({
  type: UPDATE_STAFF_MEMBER_STARTUP
});

export const updateStaffMemberSuccess = data => ({
  type: UPDATE_STAFF_MEMBER_SUCCESS,
  payload: data
});

export const updateStaffMemberFailure = () => ({
  type: UPDATE_STAFF_MEMBER_FAILURE
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

export const updateStaffMemberEmploymentDetails = (memberId, data) => {
  return function(dispatch, getState) {
    dispatch(updateStaffMemberStartup());
    return http
      .updateStaffMemberEmploymentDetails(memberId, data)
      .then(response => {
        if (!response.status || response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(updateStaffMemberSuccess(response.data));

        return response;
      })
      .catch(error => {
        dispatch(updateStaffMemberFailure());
        throw error;
      });
  };
};

export const updateStaffMemberPersonalDetails = (memberId, data) => {
  return function(dispatch, getState) {
    dispatch(updateStaffMemberStartup());
    return http
      .updateStaffMemberPersonalDetails(memberId, data)
      .then(response => {
        if (!response.status || response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(updateStaffMemberSuccess(response.data));

        return response;
      })
      .catch(error => {
        dispatch(updateStaffMemberFailure());
        throw error;
      });
  };
};

export const updateStaffMemberContactDetails = (memberId, data) => {
  return function(dispatch, getState) {
    dispatch(updateStaffMemberStartup());
    return http
      .updateStaffMemberContactDetails(memberId, data)
      .then(response => {
        if (!response.status || response.status !== 200) {
          throw Error(response.statusText);
        }

        dispatch(updateStaffMemberSuccess(response.data));

        return response;
      })
      .catch(error => {
        dispatch(updateStaffMemberFailure());
        throw error;
      });
  };
};
