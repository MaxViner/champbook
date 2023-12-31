import React, { useEffect, useState, useMemo } from 'react';
import styles from './imageContainer.module.scss';
import { useLocation } from 'react-router-dom';
import Button from '../UI/Button/Button';
import biographyIkon from '../../assets/camon/biographyIcon.png';
import citatsesIkon from '../../assets/camon/citatesIcon.png';
import linksIcon from '../../assets/camon/inkIkon.png';
import {LikeSection} from '../UI/Liker/Like';
import { checkFavorite } from '../../utils/localStorage';
import exit from '../../assets/camon/exit.jpg'
import { FAVORITE_ROUTE } from '../../routes/routes';
import sep from '../../assets/camon/sep.png'
import CitateItem from '../UI/citates/citateItem/CitateItem';



export const SlideItem = React.memo(
  ({
    id,
    img,
    citates,
    author,
    text,
    Life_history,
    links,
    HandleClose,
    citateNumber,
  }) => {
    const [citatesIsOpen, setCitatesIsOpen] = useState(false);
    const [biographyIsOpen, setBiographyIsOpen] = useState(false);
    const [linksIsOpen, setLinksIsOpen] = useState(false);
    let CitateNumber = useMemo(() => {
      return citateNumber || (citates && Math.floor(Math.random() * citates.length));
    }, [citateNumber, citates]);   
    const [isFilled, setIsFilled] = useState(false);

    const location = useLocation();
   
    useEffect(() => {
      setIsFilled(false);
      setBiographyIsOpen(false)
      setCitatesIsOpen(false)
      setLinksIsOpen(false)
    }, [id]);
    
    useEffect(() => {
      console.log('citateNumber');

      console.log(CitateNumber);
      setIsFilled(checkFavorite(id, CitateNumber));
    }, [citateNumber]);
    console.log(`id=${id}`);

    return (
      <div className={`${styles.slide}`}>
        <div className={styles.imageContainer}>
          <figure className={styles.imageContainer__image}>
            {img && <img src={img} alt="Slider" />}
            {location.pathname === FAVORITE_ROUTE && (
              <button className={styles.exit} onClick={() => HandleClose()}>
                <img src={exit} alt="" />
              </button>
            )}
            <div className={styles.heart}> 
            <LikeSection
                  id={id}
                  citateNumber={CitateNumber}
                  setIsFilled={setIsFilled}
                  isFilled={isFilled}
                />
            </div>
            <figcaption className={styles.imageContainer__text}>
              «{citates && citates[CitateNumber]?.text}»
              <br />
              © {author}
            </figcaption>
           
          </figure>
        </div>
        <img src={sep} alt="" width={'30px'} className={styles.sep} />
        <div className={`${styles.textContainer} ${styles.expanded}`}>
          <div className={`${styles.text} ${styles.expanded }`}>
           {
            text &&
            <p>{ text}</p>
           } 
            <div className={styles.btnContainer}>
              <div className={styles.row1}>
                <Button
                  text={`больше цитат`}
                  onClick={() => {
                    !+citatesIsOpen ? setCitatesIsOpen(true) : setCitatesIsOpen(false);
                  }}
                  icon={biographyIkon}
                />
                <ul className={`${styles.citateList} ${citatesIsOpen ? styles.open : ''}`}>
                  {citates &&
                    citates.map((item, index) => {
                      return (
                        <li className={styles.citateItem} key={index}>
                          <CitateItem 
                          citate={item.text}
                          citateNumber={index}
                          id={id}
                          ></CitateItem>
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className={styles.row2}>
                <Button
                  text={`история жизни`}
                  onClick={() => {
                    !biographyIsOpen ? setBiographyIsOpen(true) : setBiographyIsOpen(false);
                    setLinksIsOpen(false)
                  }}
                  icon={citatsesIkon}
                />
                <Button
                  text={`ссылки на другие источники`}
                  onClick={() => {
                    !linksIsOpen ? setLinksIsOpen(true) : setLinksIsOpen(false);
                    setBiographyIsOpen(false)
                  }}
                  icon={linksIcon}
                />
              </div>
              <div
                className={`${styles.history} ${
                  biographyIsOpen ? styles.open : ''
                } ${!citatesIsOpen ? styles.marginTop : ''}`}
              >
                {Life_history}
              </div>
              <ul className={`${styles.links} ${linksIsOpen ? styles.open : ''}`}>
                {links &&
                  links.map((item, index) => {
                    return (
                      <li className={styles.link} key={index}>
                        <span> {index + 1} - {item[0]}</span>
                        <a href={item[1]} target="_blank" rel="noreferrer">
                          <img src={linksIcon} alt="" width={40} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
