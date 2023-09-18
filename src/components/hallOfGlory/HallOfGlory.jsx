
import React, { useState } from 'react';
import {ImageSlider} from '../imageSlider/ImageSlider';
import styles from './HallOfGlory.modue.scss';
import SliderFooter from '../footer/Footer';
import { useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import { shufflePages } from '../../utils/shufflePages';
export default function HallOfGlory({ toglePicked }) {
  const pages = useSelector((state) => state.pages);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pages.length);
 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [expanded, setExpanded] = useState(true);

  const toggleExpand = () => {
   
      setTimeout(() => {
        setExpanded(!expanded);
      }, 900);
    
  };

  const handlePrevImage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentImageIndex !== 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1) % pages.length);
    } else {
      console.log('red');
      redirect('/')
    }
    setExpanded(false);
  };

  const handleImageChange = (event) => {
    const newIndex = parseInt(event.target.value) - 1;
    if (newIndex >= 0 && newIndex < pages.length) {
      setCurrentImageIndex(newIndex);
    }
  };
  

  return (
    <div className={styles.HallOfGlory}>
      <div className={styles.Content}>
        <ImageSlider
          imageData={pages[currentImageIndex]}
          expanded={expanded}
          toggleExpand={toggleExpand}
        />
      </div>
      <div className={styles.Footer}>
        <SliderFooter
          Data={pages[currentImageIndex]}
          currentImageIndex={currentImageIndex}
          handleNextImage={handleNextImage}
          handleImageChange={handleImageChange}
          handlePrevImage={handlePrevImage}
          toglePicked={toglePicked}
        />
      </div>
    </div>
  );
}