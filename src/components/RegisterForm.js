import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="formatting">Preffered Formatting</label>
          <Field name="formatting " component="select" type="text">
            <option />
            <option value="tabs">Tabs</option>
            <option value="spaces">Spaces</option>
          </Field>
        </div>
        <div>
          <label name="news">Sign up to newsletter</label>
          <Field name="news" component="input " type="checkbox"></Field>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: "register"
})(RegisterForm);

export default RegisterForm;
