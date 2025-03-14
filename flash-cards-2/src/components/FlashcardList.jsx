import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import Button from './Button.jsx';

const FlashcardList = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    if (cards.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }
  }

  function handlePrevClick() {
    if (cards.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }
  }

  function handleShuffleClick() {
    if (cards.length > 0) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      setCurrentIndex(randomIndex);
    }
  }

  return (
    <div className="flashcard-container">
      <Flashcard card={cards[currentIndex]} />
      <div className="button-container">
        <Button onClick={handlePrevClick} text="Back" />
        <Button onClick={handleNextClick} text="Next" />
        <Button onClick={handleShuffleClick} text="Shuffle" />
      </div>
    </div>
  );
};

export default FlashcardList;
