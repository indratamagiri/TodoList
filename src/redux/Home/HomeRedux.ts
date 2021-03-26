import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  homeRequest: ['data'],
});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  data: null,
};

/* ------------- Selectors ------------- */

export const CartSelector = {
  getData: (state) => state.data,
};

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state = INITIAL_STATE, { data }) => ({
  ...state, data,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.HOME_REQUEST]: request,
});
