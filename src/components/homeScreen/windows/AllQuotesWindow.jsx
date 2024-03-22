import React from 'react'
import { Link } from 'react-router-dom'
import { ALLCITATES_ROUTE } from '../../../routes/routes'
import styles from '../HomeScreen.module.scss'
import OpenBtn from '../../UI/openBtn/OpenBtn'
const AllQuotesWindow = () => {
  return (
    <article className={`${styles.section}`}>
      <h4> Смотреть все цитаты!</h4>
      <Link to={ALLCITATES_ROUTE}>
        <OpenBtn />
      </Link>
    </article>
  )
}

export default AllQuotesWindow
