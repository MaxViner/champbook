import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getFavorites } from '../../utils/localStorage'
import styles from './Favorite.module.scss'
import exit from '../../assets/camon/exit.jpg'
import { Link } from 'react-router-dom'
import { HOME_ROUTE } from '../../routes/routes'
import HeartLoader from '../UI/HeartLoader/HeartLoader'
import LoadText from '../UI/loadingText/LoadText'
import BlinkedText from '../UI/BlinkedText/BlinkedText'
import { Card } from '../UI/Card/Card'
import { fetchPages } from '../../store/slices/pagesSlice'
import { useDispatch } from 'react-redux'
export default function Favorite() {
  const dispatch = useDispatch()

  const { pages } = useSelector((state) => state.pages)

  const [favorites, setFavorites] = useState(getFavorites())
  const upadateFavorites = () => setFavorites(getFavorites())
  const [citates, setCitates] = useState([])
  useEffect(() => {
    if (pages.length !== 0) {
      favorites.forEach((item) => {
        let page = pages.find((page) => page?.id === item.id)

        let FavorCitates = []
        for (let index = 0; index < item?.numbers.length; index++) {
          let citate = page?.citates.find(
            (c) => c?.number === item?.numbers[index],
          )
          FavorCitates.push(citate)
        }
        setCitates((prev) => [
          ...prev,
          {
            img: page?.img,
            id: page?.id,
            FavorCitates: FavorCitates,
            author: page?.author,
          },
        ])
      })
    }
  }, [pages])

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPages())
    }, 6000)
  }, [dispatch])

  const onHeartClick = () => {
    upadateFavorites()
  }
  return (
    <>
      {pages.length === 0 ? (
        <>
          <LoadText data={'Favorites'} className={styles.LoadText} />
          <HeartLoader />
        </>
      ) : (
        <main className={styles.Favorites}>
          <Link to={HOME_ROUTE}>
            <img src={exit} width={'30px'} alt="exit" className={styles.exit} />
          </Link>
          <div className={styles.Favorites__title}>
            <BlinkedText text="Favorites" />
          </div>

          <ul className={styles.List}>
            {citates.map((citate, index) => {
              return (
                <li key={index} className={styles.List__item}>
                  <Card
                    img={citate?.img}
                    content={citate.FavorCitates}
                    id={citate?.id}
                    author={`${citate?.author}`}
                    onHeartClick={onHeartClick}
                  ></Card>
                </li>
              )
            })}
          </ul>
        </main>
      )}
    </>
  )
}
