import React, { useEffect } from 'react'
import styles from './Random.module.scss'
import { QuoteItem } from '../commons/quoteItem/QuoteItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPages } from '../../store/slices/pagesSlice'
import { HOME_ROUTE } from '../../routes/routes'
import Logo from '../UI/logo/Logo'
import LoadText from '../UI/loadingText/LoadText'
import Loader from '../UI/Loader/Loader'
import useRandomPage from '../../hooks/useRandomPage'

export const RandomQuote = () => {
  const dispatch = useDispatch()

  const { pages } = useSelector((state) => state.pages)

  const { randomPage, loadNewRandomPage } = useRandomPage(
    pages,
  )

  useEffect(() => {
    dispatch(fetchPages())
  }, [dispatch])

  const randomQuoteNumber = Math.floor(
    Math.random() * randomPage?.citates?.length,
  )
  return (
    <main className={styles.main}>
      {!randomPage ? (
        <div className={styles.Loader}>
          <Loader />
          <LoadText data={'Loading...'} />
        </div>
      ) : (
        <>
         <Link to={HOME_ROUTE}>
            <Logo className={styles.exit} />
          </Link>
          <button onClick={loadNewRandomPage}
          className={styles.reload}
          >
            <span>
            Выбрать новую цитату 
          </span>
          </button>
          <QuoteItem
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
         
        </>
      )}
    </main>
  )
}
