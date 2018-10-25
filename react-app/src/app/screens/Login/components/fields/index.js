import React from 'react';

export const customInput = props => {
  // Destructuring algunos values de props
  // En el meta error lo que hago es un nuevo operador if. Cuando hay una sola condicion, y si esta la otra no quiero nada. Si pasa esto, hace esto. if meta.error existe, && hace esto. 
  const { label, input, type, meta } = props;

  const getValidClassName = meta => {
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
      {(meta.error) && (
        <div className='error-field'>{meta.error}</div>
      )}
    </div>
  );
};
