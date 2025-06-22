import React, { useState } from "react";

const QuizForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !correctAnswer || answers.some(ans => ans === "")) return;

    onSubmit({ question, answers, correctAnswer });
    setQuestion("");
    setAnswers(["", "", ""]);
    setCorrectAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <h2 className="form-title">Create Your Own Question</h2>

      <input
        type="text"
        className="form-input"
        placeholder="Enter your question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {answers.map((ans, i) => (
        <input
          key={i}
          type="text"
          className="form-input"
          placeholder={`Option ${i + 1}`}
          value={ans}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[i] = e.target.value;
            setAnswers(newAnswers);
          }}
        />
      ))}

      <input
        type="text"
        className="form-input"
        placeholder="Enter the correct answer..."
        value={correctAnswer}
        onChange={(e) => setCorrectAnswer(e.target.value)}
      />

      <button className="glow-button" type="submit">
        <span></span><span></span><span></span><span></span>
        Add Question
      </button>
    </form>
  );
};

export default QuizForm;
