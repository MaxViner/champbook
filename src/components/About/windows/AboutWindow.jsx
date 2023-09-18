import React, { useState } from 'react';
import styles from '../AnimatedWindows.module.scss';
import { useDispatch } from 'react-redux';
import { openModal, setType } from '../../../store/slices/modalSlice';

const AboutWindow = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const dispatch = useDispatch();

  const openModalHandler = () => {
    dispatch(setType('about')); 
    dispatch(openModal());
  };

  return (
    <button className={`${styles.window} ${styles.window1}`} onClick={openModalHandler}>
     
       <h2>Что такое чертог славы?
        </h2> 
      </button>
    
  );
};

export default AboutWindow;