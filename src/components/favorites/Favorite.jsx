import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../routes/routes';
import Logo from '../UI/logo/Logo';
import HeartLoader from '../UI/heartLoader/HeartLoader';
import LoadText from '../UI/loadingText/LoadText';
import { Card } from '../commons/card/Card';
import styles from './Favorite.module.scss'
import useFavorites from '../../hooks/useFavorites';

export default function Favorite() {
  const { citates, upadateFavorites, isLoading } = useFavorites();
  const onHeartClick = () => {
    upadateFavorites();
  };

  return (
    <>
      {isLoading ? (
        <>
          <LoadText data={'Favorites'} className={styles.LoadText} />
          <HeartLoader />
        </>
      ) :
      citates.length === 0 ? (
        <>

           <Link to={HOME_ROUTE}>
            <button className={styles.exit}>
              <Logo onClick />
            </button>
          </Link>
          <h1>
            Похоже, вы еще не добавили ничего в избранное 
          </h1>

          <Link to={HOME_ROUTE}>
            <button className={styles.exit}>
             <span>вернуться на главную 
             <Logo onClick />
              </span> 
            </button>
          </Link>
        </>
      ) : (
        <main className={styles.Favorites}>
          <Link to={HOME_ROUTE}>
            <button className={styles.exit}>
              <Logo onClick />
            </button>
          </Link>
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
              );
            })}
          </ul>
        </main>
      )}
    </>
  );
}