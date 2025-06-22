import React from "react";

const Result = ({ score, total, onRestart }) => {
  return (
    <div className="result">
      <h2 style={{ color: "#f6ad55" }}>Quiz Completed!</h2>
      <p style={{ color: "#fff" }}>
        Your Score: {score} / {total}
      </p>
      <button className="neon-button" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
};

export default Result;
