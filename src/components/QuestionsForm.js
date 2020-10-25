import React, { useState } from "react";

function QuestionsForm({ questions, setScore, score, name }) {
  let propQuestions = [];
  propQuestions = questions;
  console.log(propQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [scoreLocal, setScoreLocal] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScoreLocal(scoreLocal + 2);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore(scoreLocal);
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <div> {name}</div> ,You scored {score} out of{" "}
          {propQuestions.length * 2}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{propQuestions.length}
            </div>
            <div className="question-text">
              {propQuestions[currentQuestion].questionText}
            </div>
            <div>Your Name: {name}</div>
            <div>Your Score: {scoreLocal}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <div>
                <input
                  type="radio"
                  id="qAnswers"
                  name="qAnswers"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                />
                <label> {answerOption.answerText}</label>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default React.memo(QuestionsForm);
