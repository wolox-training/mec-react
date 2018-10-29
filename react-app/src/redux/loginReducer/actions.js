import UserServices from '../../services/UserServices';
import api from '../../services/config/api';

const privateActionCreators = {
  logIn: data => ({
    type: 'LOGIN',
    payload: data
  }),
  logInOk: data => ({
    type: 'LOGIN_OK',
    payload: data
  }),
  logInLoading: () => ({
    type: 'LOGIN_LOADING'
  }),
  logInFailure: data => ({
    type: 'LOGIN_FAILURE',
    payload: data
  }),
  logOut: data => ({
    type: 'LOG_OUT',
    payload: data
  })
};

export const actionCreators = {
  logInSubmit: ({ email, password }) => async dispatch => {
    dispatch(privateActionCreators.logInLoading());
    const response = await UserServices.getUserSessions(email, password);
    if (response.ok) {
      dispatch(privateActionCreators.logIn(response.data));
      if (response.data.length > 0) {
        dispatch(privateActionCreators.logInOk(response.data));
        api.setHeaders({
          Authorization: response.data[0].token
        });
      } else {
        window.alert('Wrong Mail or Password. Please check your credentials again!');
        dispatch(privateActionCreators.logInFailure(response.problem));
      }
    } else {
      dispatch(privateActionCreators.logInFailure(response.problem));
    }
  }
};

export default actionCreators;
