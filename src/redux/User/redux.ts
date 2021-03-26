import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  nameUser: ['data'],
});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = {
  name: '',
};

/* ------------- Selectors ------------- */

export const CartSelector = {
  getData: (state) => state.data,
};

/* ------------- Reducers ------------- */

export const inputName = (state = INITIAL_STATE, { data }) => ({
  ...state, name: data,
});

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NAME_USER]: inputName,
});
