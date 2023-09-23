
import React, { useState } from 'react';
import styles from './AnimatedWindows.module.scss';
import './blink.css';
import ModalWindow from '../UI/modalWindow/modalWindow';
import AboutWindow from './windows/AboutWindow';
import HowToUseWindow from './windows/HowToUseWindow';
import RandomQuoteWindow from './windows/RandomQuoteWindow';
import AllQuotesWindow from './windows/AllQuotesWindow';
import FavoriteWindow from './windows/FavoriteWindow';

const AnimatedWindows = () => {

  

  return (
    <>
      <div className={styles.AnimatedWindows}>
      <div className={` neon`}>
        <span className='blink'
        data-text=" HallOfFame

        ">
         HallOfFame
          </span>
          <span className="gradient"></span>
        <span className="spotlitg"></span>
    </div>
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