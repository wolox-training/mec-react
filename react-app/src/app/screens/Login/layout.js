import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import { validations } from './validation/index';
import customInput from './components/fields';

class RegisterForm extends Component {
  render() {
    // El name prop es un identifier para nuestro field. El component prop se refiere al html tag. El tipo se refiere a lo que tenemos que ingresar en el componente. 
    // El handle submit lo recibe por props.
    // handleSubmit debe llamarse si o si la funcion que le llega por props, aunque deberia ser onSubmit porque asi se llama en el compo que se la pasa, Field la busca como handleSubmit. 
    // Dentro de componentes creo una carpeta field, donde detallo el compoinente input. Aca solo lo rendereo.
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
        <button className="button-style" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
// Tengo que decorate nuestro componente usando el reduxForm decorator.
RegisterForm = reduxForm({
  form: 'register'
})(RegisterForm);

export default RegisterForm;
