import React, { useState } from "react";
import QuizForm from "./QuizForm";
import Question from "./Question";
import Result from "./Result";
import { QuizContext } from "./QuizContext";
import { quizData as initialQuizData } from "./quizData";

const QuizApp = () => {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAddQuestion = (newQ) => {
    setQuizData([...quizData, newQ]);
  };

  const handleNext = () => {
    if (selectedAnswer === quizData[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer("");
    } else {
      setQuizEnd(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setQuizEnd(false);
    setShowQuiz(false);
    setQuizData(initialQuizData);
  };

  return (
    <QuizContext.Provider value={{ selectedAnswer, setSelectedAnswer }}>
      <div className="quiz-app">
        {!showQuiz ? (
          <>
            <QuizForm onSubmit={handleAddQuestion} />
            {quizData.length > 0 && (
              <button className="glow-button" onClick={() => setShowQuiz(true)}>
                <span></span><span></span><span></span><span></span>
                Start Quiz
              </button>
            )}
          </>
        ) : !quizEnd ? (
          <Question
            questionData={quizData[currentIndex]}
            onSubmit={handleNext}
          />
        ) : (
          <Result
            score={score}
            total={quizData.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </QuizContext.Provider>
  );
};

export default QuizApp;
