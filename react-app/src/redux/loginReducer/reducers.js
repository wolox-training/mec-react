import { createReducer, completeReducer } from 'redux-recompose';

import createEffects from './util';
import { actions } from './actions';

const initialState = {
  user: null,
  loginLoading: false,
  // logged: false,
  loginError: false
  // loginErrormsg: ''
};

// create an object which has the actions and the state changes.
const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
//   [actions.LOGIN]: createEffects.onLoading,
//   [actions.LOGIN_SUCCESS]: createEffects.onSuccess,
//   [actions.LOGIN_FAILURE]: createEffects.onFailure,
    [actions.LOG_OUT]: createEffects.onLogOut
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
