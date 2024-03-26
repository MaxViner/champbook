import React from 'react'
import styles from '../../HomeScreen.module.scss'
import abstarctImg from '../../../../assets/camon/abstract.svg'
import AllQuotesWindow from '../../windows/AllQuotesWindow'
import FavoriteWindow from '../../windows/FavoriteWindow'
import AboutWindow from '../../windows/AboutWindow'
import HowToUseWindow from '../../windows/HowToUseWindow'
export const HomeScreenContent = ({ setIsAboutBrojectView, setIsInfoView }) => {
  return (
    <>
      <h1 className={styles.homeScreen__Title}>
        Цитаты про жизнь, 
        {/* <img src={abstarctImg} alt="abstarctImg" /> */}

        которые помогут вдохновиться и задуматься
      </h1>
      <div className={styles.SectionsList}>
        <AboutWindow setIsAboutBrojectView={setIsAboutBrojectView} />
        <HowToUseWindow setIsInfoView={setIsInfoView} />
        <AllQuotesWindow />
        <FavoriteWindow />
      </div>
    </>
  )
}
