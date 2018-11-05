import { createTypes, completeTypes } from 'redux-recompose';

import UserServices from '../../services/UserServices';
import api from '../../services/config/api';

export const actions = createTypes(completeTypes(['LOGIN'], ['LOG_OUT']), '@@LOGIN');

export const actionCreators = {
  logIn: values => ({
    type: actions.LOGIN,
    target: 'user',
    payload: values,
    service: UserServices.getUserSessions,
    successSelector: response => response.data[0]
  }),
  logOut: () => dispatch => {
    dispatch({ type: actions.LOG_OUT });
    api.deleteHeader('Authorization');
  }
};

export default actionCreators;
