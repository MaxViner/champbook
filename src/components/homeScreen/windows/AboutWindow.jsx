import React from 'react'
import styles from '../HomeScreen.module.scss'
import OpenBtn from '../../UI/openBtn/OpenBtn'

const AboutWindow = ({ setIsAboutBrojectView }) => {
  return (
    <article className={`${styles.section}`}>
      <h4>Что такое чертог славы?</h4>
      <OpenBtn onClick={() => setIsAboutBrojectView(true)} />
    </article>
  )
}

export default AboutWindow
