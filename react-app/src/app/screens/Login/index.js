import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import actionCreator from '../../../redux/loginReducer/actions';

import RegisterForm from './layout';

function RegisterFormContainer({ logged, submit, errormsg }) {
  return logged ? <Redirect to="/game" /> : <RegisterForm onSubmit={submit} errormsg={errormsg} />;
}

RegisterFormContainer.propTypes = {
  logged: PropTypes.bool,
  submit: PropTypes.func,
  errormsg: PropTypes.string
};

const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged,
  errormsg: state.login.errormsg
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
