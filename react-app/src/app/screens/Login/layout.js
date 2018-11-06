import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Button from './components/Button';
import { validations } from './validation/index';
import customInput from './components/fields';

class RegisterForm extends Component {
  render() {
    return (
      <form className="flex-container" onSubmit={this.props.handleSubmit}>
        <Field
          name="email"
          component={customInput}
          type="email"
          label="Email"
          validate={[validations.required, validations.format]}
        />
        <Field
          name="password"
          component={customInput}
          type="password"
          label="Password"
          validate={[validations.required, validations.minLength]}
        />
        <Field
          name="comnfirm-pass"
          component={customInput}
          type="password"
          label="Confirm Password"
          validate={[validations.required, validations.matchesPassword]}
        />
        <Button userLoading={this.props.userLoading} />
        <p>{this.props.userError}</p>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  userError: PropTypes.string,
  userLoading: PropTypes.bool
};

RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
