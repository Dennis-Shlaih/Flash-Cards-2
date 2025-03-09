import React, { useState } from 'react';

const Flashcard = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  function handleCardClick() {
    setShowAnswer(!showAnswer);
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
    <div onClick={handleCardClick} className={`flashcard ${showAnswer ? 'flipped' : ''} ${getCardColorClass(props.card.difficulty)}`}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          {props.card.question}
        </div>
        <div className="flashcard-back">
          {props.card.answer}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
