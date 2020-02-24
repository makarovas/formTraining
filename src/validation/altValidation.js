export const required = value => (value ? undefined : "Value is required");

export const minLength = value =>
  value.length < 4 ? "value must be at lest 4 characters" : undefined;

export const maxLength = value =>
  value.length > 10 ? "value is to long " : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password
    ? undefined
    : "Password should be matched, please retype";
