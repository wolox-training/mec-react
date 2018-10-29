import React, { Component } from 'react';

class customInput extends Component {
  state = { validClassName: 'form-input' };

  static getDerivedStateFromProps(props) {
    if (props.meta.touched) {
      if (props.meta.invalid) {
        return {
          validClassName: 'form-input invalid'
        };
      }
      return {
        validClassName: 'form-input valid'
      };
    }
  }

  render() {
    return (
      <div>
        <label className="form-field">{this.props.label}</label>
        <input {...this.props.input} type={this.props.type} className={this.state.validClassName} />
        {this.props.meta.error && <div className="error-field">{this.props.meta.error}</div>}
      </div>
    );
  }
}

export default customInput;
