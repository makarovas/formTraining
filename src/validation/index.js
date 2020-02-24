export const validate = ({ firstName, secondName, username }) => {
  let errors = {};
  if (!firstName) {
    errors.firstName = "First name is required!";
  }
  if (!secondName) {
    errors.secondName = "Second name is required!";
  }

  if (!username) {
    errors.username = "username is required!";
  } else if (username.length < 4) {
    errors.username = "Username must be at least 4 characters long";
  } else if (username.length > 10) errors.username = "WOW WOW STOP";

  return errors;
};
