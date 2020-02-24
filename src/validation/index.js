export const validate = values => {
  let errors = {};
  if (!values.firstName) {
    error.firstName = "First name is required!";
  }
  if (!values.secondName) {
    error.secondName = "Second name is required!";
  }

  if (!values.username) {
    error.username = "username is required!";
  } else if (value.username.length < 4) {
    error.username = "Username must be at least 4 characters long";
  } else if (values.username.length > 10) errors.username = "WOW WOW STOP";

  return errors;
};
