import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput, customSelect } from "./fields/index";
import { validate } from "../validation";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="firstName"
          label="FirstName"
          component={customInput}
          type="text"
        />
        <Field
          name="secondName"
          label="SecondName"
          component={customInput}
          type="text"
        />
        <Field
          name="preference"
          label="Formatting"
          component={customSelect}
          type="text"
        />
        <Field
          name="newsletter"
          label="Sign up"
          component={customInput}
          type="checkbox"
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  validate
})(RegisterForm);

export default RegisterForm;
