
import React from 'react';
import styles from './AnimatedWindows.module.scss';
import ModalWindow from '../UI/modalWindow/modalWindow';
import AboutWindow from './windows/AboutWindow';
import HowToUseWindow from './windows/HowToUseWindow';
import RandomQuoteWindow from './windows/RandomQuoteWindow';
import AllQuotesWindow from './windows/AllQuotesWindow';
import FavoriteWindow from './windows/FavoriteWindow';
import BlinkedText from '../UI/BlinkedText/BlinkedText';

const AnimatedWindows = () => {

  

  return (
    <>
      <div className={styles.AnimatedWindows}>
        <BlinkedText text='HALLOFFAME'/>
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