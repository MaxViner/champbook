
import React from 'react';
import { Link } from 'react-router-dom';
import { FAVORITE_ROUTE } from '../../../routes/routes';
import { Like } from '../../UI/Liker/Like';
import styles from '../AnimatedWindows.module.scss';

const FavoriteWindow = () => {
  return (
      <Link to={FAVORITE_ROUTE}>
    <button className={`${styles.window} ${styles.window5} ${styles.favorites}`}>
          
          <h2>Избранное</h2>
     
    </button>
      </Link>
  );
};

export default FavoriteWindow;