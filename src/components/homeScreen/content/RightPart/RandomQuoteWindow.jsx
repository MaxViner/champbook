import React from 'react'
import { Link } from 'react-router-dom'
import { RANDOM_ROUTE } from '../../../../routes/routes'
import styles from '../../HomeScreen.module.scss'
import OpenBtn from '../../../UI/openBtn/OpenBtn'
import abstractFormSvg from '../../../../assets/camon/form.svg'
import abstractForm2Svg from '../../../../assets/camon/form2.svg'

const RandomQuoteWindow = () => {
  return (
    <article className={styles.section__Right}>
      <img
        src={abstractFormSvg}
        alt={abstractFormSvg}
        className={styles.section__Right__form1}
      />
      <img
        src={abstractForm2Svg}
        alt={abstractForm2Svg}
        className={styles.section__Right__form2}
      />
      <div>
      <h4 style={{ zIndex: '333' }}> Выбрать случайную цитату</h4>
      <Link to={RANDOM_ROUTE} className={styles.section__Right__btn}>
        <OpenBtn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      </Link>
      </div>
    </article>
  )
}

export default RandomQuoteWindow
