import React from 'react';
import { addToFavorites } from '../../../utils/localStorage';
import './Heart.css'
export const Like = ({id,number,isFilled,setIsFilled}) => {

  const handleClick = () => {
    addToFavorites(id, number);
    setIsFilled&& setIsFilled(true)
  };
  
  return (
       <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width="40"
      height="40"
      fill={isFilled ? 'red' : 'none'}
      stroke="red"
      strokeWidth="2"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <path d="M20 4.5C15.5 1 8.5 3.5 8.5 9c0 4.5 4.5 6.5 11.5 12.5C26.5 15.5 31 13.5 31 9c0-5.5-7-8-11.5-4.5z" />
    </svg>
  
  );
};

