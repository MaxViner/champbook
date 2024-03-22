import React from 'react'
import { Link } from 'react-router-dom'
import { FAVORITE_ROUTE } from '../../../routes/routes'
import styles from '../HomeScreen.module.scss'
import OpenBtn from '../../UI/openBtn/OpenBtn'
const FavoriteWindow = () => {
  return (
    <article className={`${styles.section}`}>
      <h4> Избранное</h4>
      <Link to={FAVORITE_ROUTE}>
        <OpenBtn
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />
      </Link>
    </article>
  )
}

export default FavoriteWindow
