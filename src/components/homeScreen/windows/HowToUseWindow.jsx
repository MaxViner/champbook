import React from 'react'
import styles from '../HomeScreen.module.scss'

import OpenBtn from '../../UI/openBtn/OpenBtn'
const HowToUseWindow = ({ setIsInfoView }) => {
  return (
    <article className={`${styles.section}`}>
      <h4>Как использовать Чертог Славы?</h4>
      <OpenBtn onClick={() => setIsInfoView(true)} />
    </article>
  )
}

export default HowToUseWindow
