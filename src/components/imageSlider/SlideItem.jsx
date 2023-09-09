import React, { useState } from 'react';
import styles from './imageContainer.module.scss';
import { Link, useLocation } from 'react-router-dom';
import Button from '../UI/Button/Button';
import biographyIkon from '../../assets/camon/biographyIcon.png';
import citatsesIkon from '../../assets/camon/citatesIcon.png';
import linksIcon from '../../assets/camon/inkIkon.png';
import {Like} from '../UI/Liker/Like';
import { checkFavorite } from '../../utils/localStorage';
import exit from '../../assets/camon/exit.jpg'
import { FAVORITE_ROUTE } from '../../routes/routes';

export const SlideItem = ({
  id,
  img,
  citates,
  text,
  description,
  author,
  expanded,
  toggleExpand,
  Life_history,
  links,
  HandleClose,
  citateNumber,
}) => {
  const [citatesIsOpen, setCitatesIsOpen] = useState(false);
  const [biographyIsOpen, setBiographyIsOpen] = useState(false);
  const [linksIsOpen, setLinksIsOpen] = useState(false);
  const randomIndex =citateNumber|| citates && Math.floor(Math.random() * citates.length);
  const [isFilled, setIsFilled] = useState(false);
  const isFavorite = checkFavorite(id, randomIndex);
  const location=useLocation()

  return (
    <div className={`${styles.slide}`}>
      <div className={styles.imageContainer}>

        <figure className={styles.imageContainer__image}>
          {img && <img src={img} alt="Slider" />}

          {location.pathname===FAVORITE_ROUTE &&
          <button  className={styles.exit}
          onClick={() => HandleClose()}>
          <img src={exit} >
            </img>
          </button>
        }

          <div className={styles.heart}>

            <Like
              id={id}
              number={randomIndex}
              isFilled={isFavorite}
              setIsFilled={setIsFilled}/>

          </div>
          <figcaption className={styles.imageContainer__text}>
            «{citates && citates[randomIndex].text}»
          </figcaption>
        </figure>

      </div>
      <div className={`${styles.textContainer} ${expanded ? styles.expanded : ''}`}>
        <div className={`${styles.text} ${expanded ? styles.expanded : ''}`}>
          <p>{text || description}</p>
          <div className={styles.btnContainer}>
            <Button
              text={`больше цитат ${author}`}
              onClick={() => {
                !citatesIsOpen ? setCitatesIsOpen(true) : setCitatesIsOpen(false);
              }}
              icon={biographyIkon}
            />
            <ul className={`${styles.citateList} ${citatesIsOpen ? styles.open : ''}`}>
              {citates &&
                citates.map((item, index) => {
                  return (
                    <li className={styles.citateItem} key={index}>
                      {item.number + 1} - {item.text}
                    </li>
                  );
                })}
            </ul>
            <Button
              text={`история жизни ${author}`}
              onClick={() => {
                !biographyIsOpen ? setBiographyIsOpen(true) : setBiographyIsOpen(false);
              }}
              icon={citatsesIkon}
            />
            <div className={`${styles.history} ${biographyIsOpen ? styles.open : ''}`}>
              {Life_history}
            </div>
            <Button
              text={`ссылки на другие источники`}
              onClick={() => {
                !linksIsOpen ? setLinksIsOpen(true) : setLinksIsOpen(false);
              }}
              icon={linksIcon}
            />
            <ul className={`${styles.links} ${linksIsOpen ? styles.open : ''}`}>
              {links &&
                links.map((item, index) => {
                  return (
                    <li className={styles.link} key={index}>
                      {index + 1} -
                      <a href={item} target="_blank" referrer="noreferrer">
                        <img src={linksIcon} alt="" width={40} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        {!expanded && (
          <div className={styles.readMore} onClick={toggleExpand}>
            Читать полностью
          </div>
        )}
        {expanded && (
          <div className={styles.readMore} onClick={toggleExpand}>
            Свернуть
          </div>
        )}
      </div>
    </div>
  );
};