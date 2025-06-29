import React, { useState } from 'react';
import { Form} from 'react-bootstrap';

function QuizQuestion({ question, onAnswer, disabled }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    const isCorrect = question.options.find(opt => opt.id === e.target.value).correct;
    onAnswer(isCorrect);
  };

  return (
    <div className="quiz-question">
      <h4>{question.question}</h4>
      <Form>
        {question.options.map((option) => (
          <Form.Check
            key={option.id}
            type="radio"
            name={`question-${question.id}`}
            id={`${question.id}-${option.id}`}
            label={option.text}
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
            disabled={disabled}
          />
        ))}
      </Form>
    </div>
  );
}

export default QuizQuestion;