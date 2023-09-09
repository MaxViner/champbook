import React from 'react';
import './FlashingText.css';

const FlashingText = ({text}) => {
  return (
    <div className="flashing-text">
      <span className="text">{text}</span>
    </div>
  );
};

export default FlashingText;