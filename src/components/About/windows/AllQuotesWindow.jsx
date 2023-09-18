
import React from 'react';
import { Link } from 'react-router-dom';
import { ALLCITATES_ROUTE } from '../../../routes/routes';
import styles from '../AnimatedWindows.module.scss';

const AllQuotesWindow = () => {
  return (
    <Link to={ALLCITATES_ROUTE}>
    <button className={`${styles.window} ${styles.window4}`}>
      <h2>
       Смотреть все цитаты!
      </h2>
    </button>
    </Link>
  );
};

export default AllQuotesWindow;