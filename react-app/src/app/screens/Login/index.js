import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import actionCreator from '../../../redux/loginReducer/actions';

import RegisterForm from './layout';

function RegisterFormContainer({ user, submit, userErrormsg, userLoading }) {
  return user ? (
    <Redirect to="/game" />
  ) : (
    <RegisterForm onSubmit={submit} userErrormsg={userErrormsg} userLoading={userLoading} />
  );
}

RegisterFormContainer.propTypes = {
  user: PropTypes.Object,
  submit: PropTypes.func,
  userErrormsg: PropTypes.string,
  userLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: state.login.user,
  userErrormsg: state.login.userErrormsg,
  userLoading: state.login.userLoading
});

const mapDispatchToProps = dispatch => {
  return {
    submit: values => dispatch(actionCreator.logIn(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
