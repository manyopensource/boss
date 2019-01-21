import { INIT_OF_DATA } from './../constants/ActionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case INIT_OF_DATA:
      return state.concat(action.payload.staffTypes);
    default:
      return state;
  }
};

export default reducer;
