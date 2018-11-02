import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import actionCreator from '../../../redux/loginReducer/actions';

import RegisterForm from './layout';

function RegisterFormContainer({ user, submit, loginErrormsg, loginLoading }) {
  return user ? (
    <Redirect to="/game" />
  ) : (
    <RegisterForm onSubmit={submit} loginErrormsg={loginErrormsg} loginLoading={loginLoading} />
  );
}

RegisterFormContainer.propTypes = {
  user: PropTypes.Object,
  submit: PropTypes.func,
  loginErrormsg: PropTypes.string,
  loginLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.login.user,
  loginErrormsg: state.login.loginErrormsg,
  loginLoading: state.login.loginLoading
});

const mapDispatchToProps = dispatch => {
  return {
    submit: value => dispatch(actionCreator.logIn(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
