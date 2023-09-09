
import React from 'react';
import './Button.css';

const Button = ({ text, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="button-icon">
        <img src={icon} />
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;