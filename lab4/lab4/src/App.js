import React from "react";
import QuizApp from  "./components/QuizApp";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "white", marginBottom: "20px" }}>React Quiz App </h1>
      <QuizApp />

      {/* Hiệu ứng bong bóng */}
      <ul className="bubbles">
        {Array.from({ length: 30 }).map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
