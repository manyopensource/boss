import {
  LOAD_STAFF_MEMBERS_STARTUP,
  LOAD_STAFF_MEMBERS_SUCCESS,
  LOAD_STAFF_MEMBERS_FAILURE
} from './../constants/ActionTypes';

const reducer = (
  state = {
    data: [],
    isLoading: false
  },
  action
) => {
  switch (action.type) {
    case LOAD_STAFF_MEMBERS_STARTUP:
      return { ...state, isLoading: true };
    case LOAD_STAFF_MEMBERS_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.staffMembers };
    case LOAD_STAFF_MEMBERS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
