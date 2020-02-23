import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm";

class RegisterFormContainer extends Component {
  submit = values => {
    // window.alert(JSON.stringify(values, null, 4));
    console.log(JSON.stringify(values, null, 4));
  };

  getInitialValues  = () => {
    retunr {
      preference:
    }
  }
  render() {
    return (
      <RegisterForm onSubmit={this.submit} initialValues={this.getInitialValues()} />
    );
  }
}

export default RegisterFormContainer;
