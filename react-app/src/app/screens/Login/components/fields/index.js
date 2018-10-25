import React from 'react';

export const customInput = props => {
  const { label, input, type, meta } = props;

  const getValidClassName = () => {
    if (meta.touched && meta.invalid) {
      return 'form-input invalid';
    } else if (meta.touched && meta.valid) {
      return 'form-input valid';
    }
    return 'form-input';
  };

  return (
    <div>
      <label className="form-field">{label}</label>
      <input {...input} type={type} className={getValidClassName(meta)} />
      {meta.error && <div className="error-field">{meta.error}</div>}
    </div>
  );
};
