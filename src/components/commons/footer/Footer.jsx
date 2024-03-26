import React from 'react'
import styles from './Footer.module.scss'
import next from '../../../assets/camon/next.png'
const SliderFooter = ({
  Data,
  currentImageIndex,
  handleNextImage,
  handleImageChange,
  handlePrevImage,
}) => {
  return (
    <footer className={styles.footer}>
      <button className={styles.prev} onClick={handlePrevImage}>
        <img src={next}></img>
      </button>
      <input
        className={styles.input}
        type="number"
        min="1"
        max={Data?.length}
        value={currentImageIndex + 1}
        onChange={handleImageChange}
      />
      <button className={styles.next} onClick={handleNextImage}>
        <img src={next}></img>
      </button>
    </footer>
  )
}
export default SliderFooter
