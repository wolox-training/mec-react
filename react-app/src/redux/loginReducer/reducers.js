import { createReducer, completeReducer } from 'redux-recompose';

import onLogOut from './util';
import { actions } from './actions';

const initialState = {
  user: null,
  userLoading: false,
  userError: ''
};

// create an object which has the actions and the state changes.
const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOG_OUT]: onLogOut
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
