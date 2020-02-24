import React, { Component } from "react";
import { Field, reduxForm, FieldArray } from "redux-form";
import { customInput, customSelect, discounts } from "./fields/index";
import { validate } from "../validation";
// import "./style.css";
import capitalize from "capitalize";

import {
  required,
  minLength,
  maxLength,
  matchesPassword,
  asyncValidate
} from "../validation/altValidation";

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
          // validate={[required]}
          normalize={capitalize}
        />
        <Field
          name="secondName"
          label="SecondName"
          component={customInput}
          type="text"
          // validate={[required]}
          normalize={capitalize}
        />
        <Field
          name="username"
          label="Username"
          component={customInput}
          // validate={[required, minLength, maxLength]}
          type="text"
        />
        <Field
          name="password"
          label="Password"
          component={customInput}
          type="password"
          validate={[required]}
        />
        <Field
          name="confirmPasswordField"
          label="ConfirmPasswordField"
          component={customInput}
          type="password"
          validate={[required, matchesPassword]}
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
        <FieldArray name="discountCodes" component={discounts} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register",
  validate,
  asyncValidate,
  asyncBlurFields: ["username"]
})(RegisterForm);

export default RegisterForm;
