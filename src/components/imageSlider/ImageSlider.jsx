import React from 'react'
import { Link } from 'react-router-dom'
import styles from './imageContainer.module.scss'
import { SlideItem } from './SlideItem'
import { HOME_ROUTE } from '../../routes/routes'
import Logo from '../UI/logo/Logo'
export const ImageSlider = ({
  id,
  img,
  citates,
  author,
  text,
  Life_history,
  links,
}) => {
  return (
    <main className={styles.main}>
      <Link to={HOME_ROUTE}>
        <Logo className={styles.exit} />
      </Link>
      <SlideItem
        id={id}
        img={img}
        text={text}
        citates={citates}
        author={author}
        Life_history={Life_history}
        links={links}
      />
    </main>
  )
}
