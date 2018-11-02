import { createTypes, completeTypes } from 'redux-recompose';

import UserServices from '../../services/UserServices';
import api from '../../services/config/api';
// import withStatusHandling from 'redux-recompose/lib/injections/withStatusHandling';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOG_OUT']), '@@LOGIN');

/* const privateActionCreators = {
  logIn: () => ({
    type: actions.LOGIN,
    target: 'login'
  }),
  logInSuccess: data => ({
    type: actions.LOGIN_SUCCESS,
    payload: data,
    target: 'login'
  }),
  logInFailure: () => ({
    type: actions.LOGIN_FAILURE,
    target: 'login'
  })
}; */

export const actionCreators = {
  logIn: ({ email, password }) => ({
    type: actions.LOGIN,
    target: 'login',
    payload: (email, password),
    service: UserServices.getUserSessions
   // injections: withStatusHandling({404: ()=> console.log('not found')})
  }),
  logOut: () => dispatch => {
    dispatch({ type: actions.LOG_OUT });
    api.deleteHeader('Authorization');
  }
};

export default actionCreators;
