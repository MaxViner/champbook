
import React from 'react';
import { Link } from 'react-router-dom';
import { RANDOM_ROUTE } from '../../../routes/routes';
import styles from '../AnimatedWindows.module.scss';

const RandomQuoteWindow = () => {
  return (
    <Link to={RANDOM_ROUTE}>
        <button className={`${styles.window} ${styles.window3}`}>
        <h2>Выбрать случайную цитату</h2>
    </button>
      </Link>
  );
};

export default RandomQuoteWindow;