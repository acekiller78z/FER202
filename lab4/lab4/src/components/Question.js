import React, { useContext } from "react";
import { QuizContext } from "./QuizContext";

const Question = ({ questionData, onSubmit }) => {
  const { selectedAnswer, setSelectedAnswer } = useContext(QuizContext);
  const isCorrect = selectedAnswer === questionData.correctAnswer;

  return (
    <div className="question">
      <span></span><span></span><span></span><span></span>
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.answers.map((option, index) => (
          <div
            key={index}
            className={`option option-${index + 1} ${
              selectedAnswer === option
                ? isCorrect
                  ? "selected correct"
                  : "selected"
                : ""
            }`}
            onClick={() => setSelectedAnswer(option)}
          >
            <span></span><span></span><span></span><span></span>
            {option}
          </div>
        ))}
      </div>
      <button className="glow-button" onClick={onSubmit} disabled={!selectedAnswer}>
        <span></span><span></span><span></span><span></span>
        Next
      </button>
      
    </div>
  );
};

export default Question;
