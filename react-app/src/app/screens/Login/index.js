import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import actionCreator from '../../../redux/loginReducer/actions';

import RegisterForm from './layout';

function RegisterFormContainer({ logged, submit }) {
  return logged ? <Redirect to="/game" /> : <RegisterForm onSubmit={submit} />;
}

RegisterFormContainer.propTypes = {
  logged: PropTypes.bool,
  submit: PropTypes.func
};

const mapStateToProps = state => ({
  email: state.login.email,
  logged: state.login.logged
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
