import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import actionCreator from '../../../redux/loginReducer/actions';

import RegisterForm from './layout';

function RegisterFormContainer({ logged, submit, errormsg, isLoading }) {
  return logged ? (
    <Redirect to="/game" />
  ) : (
    <RegisterForm onSubmit={submit} errormsg={errormsg} isLoading={isLoading} />
  );
}

RegisterFormContainer.propTypes = {
  logged: PropTypes.bool,
  submit: PropTypes.func,
  errormsg: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged,
  errormsg: state.login.errormsg,
  isLoading: state.login.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    submit: value => dispatch(actionCreator.logInSubmit(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
