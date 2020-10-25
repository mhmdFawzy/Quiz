import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import QuestionsForm from "../components/QuestionsForm";
import { setScore } from "./../redux/actions/userActions";
export class Questions extends Component {
  renderQ = (id) => {};
  componentDidMount() {}
  render() {
    return (
      <>
        {this.props.name !== "" ? (
          <QuestionsForm
            questions={this.props.questions.sort((a, b) => 0.5 - Math.random())}
            {...this.props}
          />
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questions: state.user.questions,
    name: state.user.name,
    score: state.user.score,
  };
};
const mapDispatchToProps = {
  setScore,
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
