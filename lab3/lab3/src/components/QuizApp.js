
import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import confetti from "canvas-confetti";

const QuizApp = () => {
  const [questions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Mars", "Earth"],
      answer: "Jupiter",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore(score + 1);
      triggerConfetti();
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setQuizEnd(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setQuizEnd(false);
  };

  return (
    <div className="quiz-app">
      {!quizEnd ? (
        <Question
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleNextQuestion}
        />
      ) : (
        <Result
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default QuizApp;
