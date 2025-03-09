import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import Button from './Button.jsx';

const FlashcardList = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {
    const randomIndex = Math.floor(Math.random() * props.cards.length);
    setCurrentIndex(randomIndex);
  }

  return (
    <div>
      <Flashcard card={props.cards[currentIndex]} />
      <Button onClick={handleNextClick} text="Next" />
    </div>
  );
};

export default FlashcardList;
