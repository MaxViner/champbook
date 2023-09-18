
import React, { useState } from 'react';
import styles from './AnimatedWindows.module.scss';
import { ALLCITATES_ROUTE, RANDOM_ROUTE, FAVORITE_ROUTE } from '../../routes/routes';
import { Link } from 'react-router-dom';
import ModalWindow from '../UI/modalWindow/modalWindow';
import AboutWindow from './windows/AboutWindow';
import HowToUseWindow from './windows/HowToUseWindow';
import RandomQuoteWindow from './windows/RandomQuoteWindow';
import AllQuotesWindow from './windows/AllQuotesWindow';
import FavoriteWindow from './windows/FavoriteWindow';

const AnimatedWindows = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setTimeout(() => {
      setExpanded(!expanded);
    }, 900);
  };

  return (
    <>
      <div className={styles.AnimatedWindows}>
        <h1 className={styles.title}>Чертог славы</h1>
        <div className={styles.btns}>

        <AboutWindow />
        <HowToUseWindow />
        <RandomQuoteWindow />
        <AllQuotesWindow />
        <FavoriteWindow />
        </div>
        <ModalWindow />
        
      </div>
    </>
  )
}
export default AnimatedWindows