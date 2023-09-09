
import React, { useState } from 'react';
import styles from './imageContainer.module.scss';
import { Link } from 'react-router-dom';
import { SlideItem } from './SlideItem';

export const ImageSlider = ({ imageData, toggleExpand, expanded }) => {

  return (
      <main className={styles.main}>
        <SlideItem {...imageData} expanded={expanded} toggleExpand={toggleExpand} />
      </main> 
    
  );
};



