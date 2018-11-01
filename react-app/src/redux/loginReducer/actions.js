import { createTypes } from 'redux-recompose';

import UserServices from '../../services/UserServices';
import api from '../../services/config/api';

export const actions = createTypes(['LOGIN_SUCCESS', 'LOGIN_LOADING', 'LOGIN_FAILURE', 'LOG_OUT'], '@@LOGIN');

const privateActionCreators = {
  logInSuccess: data => ({
    type: actions.LOGIN_SUCCESS,
    payload: data
  }),
  logInFailure: data => ({
    type: actions.LOGIN_FAILURE,
    payload: data
  })
};

export const actionCreators = {
  logInSubmit: ({ email, password }) => async dispatch => {
    dispatch({ type: actions.LOGIN_LOADING });
    const response = await UserServices.getUserSessions(email, password);
    if (response.ok) {
      if (response.data.length > 0) {
        dispatch(privateActionCreators.logInSuccess(response.data));
        api.setHeaders({
          Authorization: response.data[0].token
        });
      } else {
        dispatch(privateActionCreators.logInFailure(response.problem));
      }
    } else {
      dispatch(privateActionCreators.logInFailure(response.problem));
    }
  },
  logOut: () => dispatch => {
    dispatch({ type: actions.LOG_OUT });
    api.deleteHeader('Authorization');
  }
};

export default actionCreators;
