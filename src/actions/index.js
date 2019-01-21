import { INIT_OF_DATA } from './../constants/ActionTypes';

export const initData = data => ({
  type: INIT_OF_DATA,
  payload: data
});