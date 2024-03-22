import React, { useState, useEffect } from 'react'
import styles from './Random.module.scss'
import { SlideItem } from '../imageSlider/SlideItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPages } from '../../store/slices/pagesSlice'
import exit from '../../assets/camon/exit.jpg'
import reboot from '../../assets/camon/reboot.jpg'
import LoadText from '../UI/loadingText/LoadText'
import Loader from '../UI/Loader/Loader'
import useRandomPage from '../../hooks/useRandomPage'
export const Random = ({}) => {
  const dispatch = useDispatch()

  const { pages } = useSelector((state) => state.pages)

  const { randomIndex, randomPage, loadNewRandomPage } = useRandomPage(
    pages,
    fetchPages,
  )

  useEffect(() => {
    dispatch(fetchPages())
  }, [dispatch])

  console.log('==========pages====================')
  console.log(pages)
  console.log('====================================')

  console.log('=====randomIndex========================')
  console.log(randomIndex)
  console.log(randomPage)
  const randomQuoteNumber = Math.floor(
    Math.random() * randomPage?.citates?.length,
  )
  return (
    <main className={styles.main}>
      {!pages[0] ? (
        <div className={styles.Loader}>
          <Loader />
          <LoadText data={'Loading...'} />
        </div>
      ) : (
        <>
          <SlideItem
            id={randomPage?.id}
            img={randomPage?.img}
            text={randomPage?.text}
            citates={randomPage?.citates}
            description={randomPage?.description}
            author={randomPage?.author}
            Life_history={randomPage?.Life_history}
            links={randomPage?.links}
            citateNumber={randomQuoteNumber}
          />
          <div className={styles.btnContainer}>
            <button className={styles.exit}>
              <Link to={'/'}>
                <img src={exit} alt="exit" />
              </Link>
            </button>
            <button className={styles.reboot} onClick={loadNewRandomPage}>
              <img src={reboot} alt="reboot" />
            </button>
          </div>
        </>
      )}
    </main>
  )
}
