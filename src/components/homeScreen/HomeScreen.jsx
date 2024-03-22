import React, { useEffect, useState } from 'react'
import styles from './HomeScreen.module.scss'
import ModalWindow from '../UI/modalWindow/modalWindow'
import { HomeScreenContent } from './content/LeftPart/HomeScreenContent'
import RandomQuoteWindow from './content/RightPart/RandomQuoteWindow'

import LoadText from '../UI/loadingText/LoadText'
import Loader from '../UI/Loader/Loader'
import Logo from '../UI/logo/Logo'
import AboutBrojecContent from './content/LeftPart/AboutBrojecContent'
import AboutImg from '../../assets/camon/mainPageImg/About.svg'
import Instraction from './content/LeftPart/Instarction'
import InstractionImg from '../../assets/camon/mainPageImg/InstractionImg.svg'

const HomeScreen = () => {
  const [isInfoView, setIsInfoView] = useState(false)
  const [isAboutBrojectView, setIsAboutBrojectView] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])
  return (
    <>
      {isLoading ? (
        <div className={styles.Loader}>
          <Loader />
          <LoadText data={'Loading...'} />
        </div>
      ) : (
        <>
          <section className={styles.homeScreen__Content}>
            <Logo className={styles.Logo} />

            <div
              className={`${styles.homeScreen__Content__Left} 
            ${!isAboutBrojectView && !isInfoView ? styles.visible : styles.hidden}`}
            >
              <HomeScreenContent
                setIsAboutBrojectView={setIsAboutBrojectView}
                setIsInfoView={setIsInfoView}
              />
            </div>

            <div
              className={`${styles.homeScreen__Content__Left} 
            ${isAboutBrojectView ? styles.visible : styles.hidden}`}
            >
              <AboutBrojecContent
                handleClose={() => setIsAboutBrojectView(false)}
              />
            </div>

            <div
              className={`${styles.homeScreen__Content__Left} 
            ${isInfoView ? styles.visible : styles.hidden}`}
            >
              <Instraction handleClose={() => setIsInfoView(false)} />
            </div>

            {/* RIGTH============================================================================ */}
            <div
              className={`${styles.homeScreen__Content__Right} 
            ${!isAboutBrojectView && !isInfoView ? styles.visible : styles.hidden}`}
            >
              <RandomQuoteWindow />
            </div>
            <div
              className={`${styles.homeScreen__Content__Right} 
            ${isAboutBrojectView ? styles.visible : styles.hidden}`}
            >
              <img src={AboutImg} alt="AboutImg" />
            </div>

            <div
              className={`${styles.homeScreen__Content__Right} 
            ${isInfoView ? styles.visible : styles.hidden}`}
            >
              <img src={InstractionImg} alt="InstractionImg" />
            </div>
          </section>
          <ModalWindow />
        </>
      )}
    </>
  )
}
export default HomeScreen
