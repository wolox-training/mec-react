const validateMail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const required = value => (value ? undefined : 'Value is required');

const format = value => (validateMail(value) ? undefined : 'Wrong format Mail');

const minLength = value => (value.length < 8 ? 'Value must be at least 8 characters' : undefined);

const matchesPassword = (value, allValues) =>
  value === allValues.password ? undefined : 'Password must match';

export const validations = {
  required,
  format,
  minLength,
  matchesPassword
};
