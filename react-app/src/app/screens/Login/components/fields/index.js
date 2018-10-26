import React, { Component } from 'react';

class customInput extends Component {
  state = { validClassName: 'form-input' };

  static getDerivedStateFromProps() {
    if (meta.invalid) {
      return {
        validClassName: 'form-input invalid'
      };
    }
    return {
      validClassName: 'form-input valid'
    };
  }

  render() {

    return (
      <div>
        <label className="form-field">{label}</label>
        <input {...input} type={type} className={this.state.validClassName} />
        {meta.error && <div className="error-field">{meta.error}</div>}
      </div>
    );
  }
}

export default customInput;
