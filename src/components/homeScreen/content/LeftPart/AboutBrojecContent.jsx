import React from 'react'
import styles from '../../HomeScreen.module.scss'

export default function AboutBrojecContent({ handleClose }) {
  return (
    <>
      <h1 className={styles.homeScreen__Title}>Что такое чертог славы?</h1>
      <p>
        Чертог славы поможет привлечь уже снискавшие мировую славу мысли - как
        реальные, так и вымышленны. Великие мысли вызывают поток вдохновения,
        приводящий в итоге к появлению новых идей.
      </p>
      <button className={styles.closeBtn} onClick={handleClose}>
        закрыть
      </button>{' '}
    </>
  )
}
