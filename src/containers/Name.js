import React, { Component } from "react";
import NameForm from "./../components/NameForm";
import { setUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
export class Form extends Component {
  setUserHandler = (x) => {
    this.props.dispatch(setUser(x)).then(() => {
      this.props.history.push("/quiz");
    });
  };
  render() {
    return (
      <>
        <NameForm
          setUserHandler={(x) => {
            this.setUserHandler(x);
          }}
        />
      </>
    );
  }
}

export default connect()(Form);
