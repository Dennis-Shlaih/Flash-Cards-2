import React, { useState } from 'react';
import Button from './Button.jsx';

const Flashcard = ({ card }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  function handleCardClick() {
    setShowAnswer(!showAnswer);
  }

  function handleSubmit() {
    if (card.answer.toLowerCase().trim() === userGuess.toLowerCase().trim()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
  }

  function getCardColorClass(difficulty) {
    switch (difficulty) {
      case 'easy':
        return 'green';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'red';
      default:
        return '';
    }
  }

  return (
    <div className="flashcard-container">
      {feedback && <p className="feedback-message">{feedback}</p>}
      <div className={`flashcard ${showAnswer ? 'flipped' : ''} ${getCardColorClass(card.difficulty)}`}>
        <div className="flashcard-inner" onClick={handleCardClick}>
          <div className="flashcard-front">{card.question}</div>
          <div className="flashcard-back">{card.answer}</div>
        </div>
      </div>
      <div className="input-section">
        <div className="input-wrapper">
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter your guess"
          />
          <Button onClick={handleSubmit} text="Submit" />
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
