/* eslint-disable global-require */
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  home: require('../Home/HomeRedux').reducer,
  user: require('../User/redux').reducer

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
