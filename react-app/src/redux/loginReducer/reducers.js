import { createReducer, completeReducer } from 'redux-recompose';

import createEffects from './util';
import { actions } from './actions';

const initialState = {
  user: null,
  userLoading: false,
  userError: false
};

// create an object which has the actions and the state changes.
const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.LOG_OUT]: createEffects.onLogOut
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
