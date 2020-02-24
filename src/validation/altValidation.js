export const required = value => (value ? undefined : "Value is required");

export const minLength = value =>
  value.length < 4 ? "value must be at lest 4 characters" : undefined;

export const maxLength = value =>
  value.length > 10 ? "value is to long " : undefined;

export const matchesPassword = (value, allValues) =>
  value === allValues.password
    ? undefined
    : "Password should be matched, please retype";

export const asyncValidate = async values => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(1000);
  if (["kent", "andy", "holy", "sasha"].includes(values.username)) {
    return Promise.reject({
      username: "Username already taken"
    });
  }
};
