
import React, { useState } from 'react';
import styles from './imageContainer.module.scss';
import { Link } from 'react-router-dom';
import exit from '../../assets/camon/exit.jpg'
import { SlideItem } from './SlideItem';
import { HOME_ROUTE } from '../../routes/routes';

export const ImageSlider = ({ 
    id,
    img,
    citates,
    author,
    text,
    Life_history,
    links,
   }) => {

  return (
      <main className={styles.main}>
        <Link to={HOME_ROUTE}>
          <img src={exit} alt="exit" className={styles.exit} />
        </Link>
        <SlideItem
          id={id}
          img={img}
          text={text}
          citates={citates}
          author={author}
          Life_history={Life_history}
          links={links}
          
        />
      </main> 
    
  );
};



