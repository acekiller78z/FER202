import React, { useState } from 'react';
import { Button, Form, Card, Container } from 'react-bootstrap';
import './Quiz.css'; // import CSS

const questions = [
  {
    id: 1,
    question: 'HTML là viết tắt của gì?',
    options: [
      { id: 'a', text: 'Hyper Text Markup Language', correct: true },
      { id: 'b', text: 'High Text Machine Language', correct: false },
      { id: 'c', text: 'Hyperlink and Text Markup Language', correct: false },
      { id: 'd', text: 'Home Tool Markup Language', correct: false }
    ]
  },
  {
    id: 2,
    question: 'CSS được sử dụng để làm gì?',
    options: [
      { id: 'a', text: 'Xử lý logic ứng dụng', correct: false },
      { id: 'b', text: 'Tạo giao diện và định dạng', correct: true },
      { id: 'c', text: 'Quản lý cơ sở dữ liệu', correct: false },
      { id: 'd', text: 'Xử lý API', correct: false }
    ]
  },
  {
    id: 3,
    question: 'React là gì?',
    options: [
      { id: 'a', text: 'Một ngôn ngữ lập trình', correct: false },
      { id: 'b', text: 'Một thư viện JavaScript', correct: true },
      { id: 'c', text: 'Một trình duyệt web', correct: false },
      { id: 'd', text: 'Một hệ quản trị cơ sở dữ liệu', correct: false }
    ]
  }
];

function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const getScore = () => {
    return questions.reduce((score, question) => {
      const selected = answers[question.id];
      const correct = question.options.find(opt => opt.correct)?.id;
      return selected === correct ? score + 1 : score;
    }, 0);
  };

  return (
    <Container className="quiz-container mt-4">
      <h1 className="text-center mb-4">🎯 Mini Quiz</h1>
      {questions.map((q) => (
        <Card className="mb-4 shadow-sm quiz-card" key={q.id}>
          <Card.Body>
            <Card.Title className="fw-bold">{q.question}</Card.Title>
            <Form>
              {q.options.map((opt) => {
                const selected = answers[q.id];
                const isCorrect = opt.correct;
                const isChosen = selected === opt.id;

                let className = 'quiz-option';
                if (submitted) {
                  if (isChosen && isCorrect) className += ' correct';
                  else if (isChosen && !isCorrect) className += ' incorrect';
                  else if (isCorrect) className += ' correct-not-chosen';
                }

                return (
                  <Form.Check
                    key={opt.id}
                    type="radio"
                    name={`question-${q.id}`}
                    id={`${q.id}-${opt.id}`}
                    label={opt.text}
                    value={opt.id}
                    checked={isChosen}
                    onChange={() => handleSelect(q.id, opt.id)}
                    disabled={submitted}
                    className={className}
                  />
                );
              })}
            </Form>
          </Card.Body>
        </Card>
      ))}

      {!submitted ? (
        <div className="text-center">
          <Button variant="primary" size="lg" onClick={handleSubmit}>
            Nộp bài
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <h3 className="mt-4">Kết quả: {getScore()} / {questions.length}</h3>
          <Button variant="secondary" size="lg" className="mt-3" onClick={handleRestart}>
            Làm lại
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Quiz;
