
import React, { useState } from 'react';
import styles from '../AnimatedWindows.module.scss';
import { useDispatch } from 'react-redux';
import { openModal,setType } from '../../../store/slices/modalSlice';
const HowToUseWindow = () => {

  
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(openModal());
    dispatch(setType('how')); 

  };

  return (
    <button className={`${styles.window} ${styles.window2}`} onClick={openModalHandler}>
     
        <h2>Как использовать Чертог Славы?</h2>
      </button>
    
  );
};

export default HowToUseWindow;