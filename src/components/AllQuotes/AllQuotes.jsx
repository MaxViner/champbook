import React, { useState, useEffect } from 'react'

import Logo from '../UI/logo/Logo'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../routes/routes'
import styles from './AllQuotes.module.scss'
import SliderFooter from '../commons/footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { redirect } from 'react-router-dom'
import { fetchPages } from '../../store/slices/pagesSlice'
import LoadText from '../UI/loadingText/LoadText'
import {QuoteItem} from '../commons/quoteItem/QuoteItem'
import Loader from '../UI/Loader/Loader'
export default function AllQuotes({ toglePicked }) {
  const { pages } = useSelector((state) => state.pages)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const dispatch = useDispatch()

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pages?.length)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPages())
    }, 3000)
  }, [dispatch])

  const handlePrevImage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (currentImageIndex !== 0) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1) % pages?.length)
    } else {
      redirect('/')
    }
  }

  const handleImageChange = (event) => {
    const newIndex = parseInt(event.target.value) - 1
    if (newIndex >= 0 && newIndex < pages?.length) {
      setCurrentImageIndex(newIndex)
    }
  }
  return (
    <div className={styles.HallOfGlory}>
      {!pages[0] ? (
        <div className={styles.Loader}>
          <Loader />
          <LoadText data={'Loading...'} />
        </div>
      ) : (
        <>
          <div className={styles.Content}>
          <main className={styles.main}>
          <Link to={HOME_ROUTE}>
            <Logo className={styles.exit} />
          </Link>
          <QuoteItem
            id={pages[currentImageIndex]?.id}
            img={pages[currentImageIndex]?.img}
            text={pages[currentImageIndex]?.text}
            citates={pages[currentImageIndex]?.citates}
            description={pages[currentImageIndex]?.description}
            author={pages[currentImageIndex]?.author}
            Life_history={pages[currentImageIndex]?.Life_history}
            links={pages[currentImageIndex]?.links}
            citateNumber={currentImageIndex}
            imageData={pages[currentImageIndex]}
          />
        </main>
          </div>
          <div className={styles.Footer}>
            <SliderFooter
              Data={pages[currentImageIndex]}
              currentImageIndex={currentImageIndex}
              handleNextImage={handleNextImage}
              handleImageChange={handleImageChange}
              handlePrevImage={handlePrevImage}
              toglePicked={toglePicked}
            />
          </div>
        </>
      )}
    </div>
  )
}
