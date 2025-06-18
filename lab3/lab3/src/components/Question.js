import React from "react";

const Question = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onSubmit,
}) => {
  return (
    <div className="question">
      <span></span><span></span><span></span><span></span>
      <h2>{question.question}</h2>
      <div className="options">
           {question.options.map((option, index) => (
  <div
    key={index}
    className={`option option-${index + 1} ${
      selectedAnswer === option
        ? option === question.answer
          ? "selected correct"
          : "selected"
        : ""
    }`}
    onClick={() => onAnswerSelect(option)}
  >
    <span></span><span></span><span></span><span></span>
    {option}
  </div>
))}

      </div>
      <button className="glow-button" onClick={onSubmit} disabled={!selectedAnswer}>
        <span></span><span></span><span></span><span></span>
        Next Question
      </button>

    </div>
  );
};

export default Question;
