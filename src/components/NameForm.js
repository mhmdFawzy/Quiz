import React, { Component } from "react";
import FormInput from "./form/FormInput";
import { validate } from "./form/FormActions";
export class Form extends Component {
  state = {
    formIsValid: false,
    formControls: {
      name: {
        element: "input",
        value: "",
        placeholder: "What is your Name",
        label: "Name",
        valid: false,
        touched: false,
        validationMessage: "",
        showLabel: true,
        validationRules: {
          isRequired: true,
          minLength: 8,
        },
      },
    },
  };
  changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const updatedControls = {
      ...this.state.formControls,
    };
    const updatedFormElement = {
      ...updatedControls[name],
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    // you can make validation on change or on blur
    let validation = validate(value, updatedFormElement.validationRules);
    updatedFormElement.valid = validation[0];
    updatedFormElement.validationMessage = validation[1];
    updatedControls[name] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
    });
  };
  formSubmitHandler = (e) => {
    e.preventDefault();
    let dataToSubmit = {};
    for (const inputValue in this.state.formControls) {
      dataToSubmit[inputValue] = this.state.formControls[inputValue].value;
    }
    console.log(dataToSubmit.name);
    this.props.setUserHandler(dataToSubmit.name);
  };
  render() {
    return (
      <>
        <form className="form-container" onSubmit={this.formSubmitHandler}>
          <FormInput
            id={"name"}
            change={(e) => {
              this.changeHandler(e);
            }}
            formdata={this.state.formControls.name}
          />

          <button
            onClick={this.formSubmitHandler}
            disabled={!this.state.formIsValid}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
