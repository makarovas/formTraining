export const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "First name is required!";
  }
  if (!values.secondName) {
    errors.secondName = "Second name is required!";
  }

  if (!values.username) {
    errors.username = "username is required!";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters long";
  } else if (values.username.length > 10) errors.username = "WOW WOW STOP";

  return errors;
};
