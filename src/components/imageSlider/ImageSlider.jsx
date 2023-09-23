
import React, { useState } from 'react';
import styles from './imageContainer.module.scss';
import { Link } from 'react-router-dom';
import exit from '../../assets/camon/exit.jpg'
import { SlideItem } from './SlideItem';
import { HOME_ROUTE } from '../../routes/routes';

export const ImageSlider = ({ imageData, toggleExpand, expanded }) => {

  return (
      <main className={styles.main}>
        <Link to={HOME_ROUTE}>
          <img src={exit} alt="exit" className={styles.exit} />
        </Link>
        <SlideItem {...imageData} expanded={expanded} toggleExpand={toggleExpand} 
        />
      </main> 
    
  );
};



