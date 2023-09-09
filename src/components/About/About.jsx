
import React, { useEffect, useState } from 'react';
import styles from './AnimatedWindows.module.scss';
import FlashingText from '../UI/flashingText/flashingText';
import { ALLCITATES_ROUTE, RANDOM_ROUTE,FAVORITE_ROUTE } from '../../routes/routes';
import { Link } from 'react-router-dom';
import { Like } from '../UI/Liker/Like';

const AnimatedWindows = () => {
  const [isWindow1Visible, setIsWindow1Visible] = useState(false);
  const [isWindow2Visible, setIsWindow2Visible] = useState(false);
  const [isWindow3Visible, setIsWindow3Visible] = useState(false);
  const [isWindow4Visible, setIsWindow4Visible] = useState(false);
  const [isWindow5Visible, setIsWindow5Visible] = useState(false);

  const [isText1Visible, setIsText1Visible] = useState(false)
  const [isText2Visible, setIsText2Visible] = useState(false)

  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setTimeout(
      ()=>{
        setExpanded(!expanded);
      },900
    )
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate the position to trigger the animation
      const animationTriggerPosition1 = windowHeight * 0.2;
      const animationTriggerPosition2 = windowHeight * 0.3;
      const animationTriggerPosition3 = windowHeight * 0.8;
      const animationTriggerPosition4 = windowHeight * 0.9;
      const animationTriggerPosition5 = windowHeight * 0.99;
      if (scrollPosition > animationTriggerPosition1 && !isWindow2Visible) {
        setIsWindow1Visible(true);
      } else {
        setIsWindow1Visible(false);
      }

      if (scrollPosition > animationTriggerPosition2 && !isWindow3Visible) {
        setIsWindow2Visible(true);
        setIsWindow1Visible(false)
      } else {
        setIsWindow2Visible(false);
        setExpanded(false)
        setIsWindow1Visible(true)
      }

      if (scrollPosition > animationTriggerPosition3 ) {
        setIsWindow3Visible(true);
        setIsWindow2Visible(false)
      } else {
        setIsWindow3Visible(false);
      }
      if (scrollPosition > animationTriggerPosition4) {
        setIsWindow4Visible(true);
      } else {
        setIsWindow4Visible(false);
      }
      if (scrollPosition > animationTriggerPosition5) {
        setIsWindow5Visible(true);
      } else {
        setIsWindow5Visible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className={styles.AnimatedWindows}>

    <h1 className={styles.title}>
      Чертог славы
    </h1>
{/* WHAT */}
      <div className={`${styles.window} ${styles.window1} ${isWindow1Visible ? styles.visible : ''}`}>
        <button className={styles.ABout__button}
        onClick={
          ()=>{
            setIsText1Visible((prev)=>!prev)
          }
        }
          >
            Что такое чертог славы?
          </button>
          <p className={`${styles.hidenText} ${isText1Visible? styles.visible : ""}`}>
            Чертог славы поможет привлечь уже снискавшие мировую славу мысли - как реальные, так и вымышленны. Великие мысли 
            вызывают поток вдохновения, приводящий в итоге к появлению новых идей.
          </p>
        </div>
       
        
    

     {/* HOW */}
      <div className={`${styles.window} ${styles.window2} ${isWindow2Visible ? styles.visible : ''} ${expanded ? styles.expanded : ''}`}>
      
      <button className={styles.ABout__button}
        onClick={
          ()=>{
            setIsText2Visible(true)
          }
        }
          >
          <h2>
          Как использовать Чертог Славы?
            </h2> 
          </button>
      <div className={`${styles.text} ${expanded ? styles.expanded : ''}`}>
      <p className={`${styles.hidenText} ${isText2Visible? styles.visible : ""}`}>
        Выберете цитату на любую тему, которая вас заинтересует. Например, если вы хотите найти вдохновение для своей работы, выберите цитаты о творчестве или о работе.
        Когда вы выбрали цитату, которая вам нравится, задумайтесь: что она вам говорит? Как она может помочь вам в создании своих идей?
        Попробуйте записать несколько идей, которые пришли вам в голову после прочтения цитаты. Можете использовать блокнот или приложение на смартфоне.
        Не останавливайтесь на одной цитате! Попробуйте прочитать много цитат на разные темы, чтобы получить максимум вдохновения.
        Используйте свои идеи для создания своих проектов, задач или для решения проблем.
        {!expanded && (
        <div className={styles.readMore} onClick={toggleExpand}>
          Читать полностью
        </div>
        )}
        
        {expanded && (
          <div className={styles.readMore} onClick={toggleExpand}>
            Свернуть
          </div>
        )
        }
          </p>
       
          
      </div>
     
     
      </div>
{/* RANDOM */}
      <div className={`${styles.window} ${styles.window3} ${isWindow3Visible ? styles.visible : ''}`}>
        <Link to={RANDOM_ROUTE}>
        <p className={styles.randomPick}>  выбрать случайную цитату </p>
        </Link>
      </div>
{/* ALL */}
      <div className={`${styles.window} ${styles.window4} ${isWindow4Visible ?  styles.visible : ''}`}>
       <p className={styles.Allpick}
      >
        <Link to={ALLCITATES_ROUTE}>
       Cмотреть все цитаты!
        </Link>
        </p> 
        </div>

        <div className={`${styles.window} ${styles.window5} ${isWindow5Visible ?  styles.visible : ''}`}>
      
        <Link to={FAVORITE_ROUTE}>
          <div className={styles.favorite}>
          <span>
            <Like isFilled={true}/>
          </span> 
          <span>
            Избранное
          </span> 
          </div>
      
        </Link>
        
        </div>
        {
          !isWindow2Visible&&
        <div className={styles.skroll}>
        <FlashingText text={'skroll down'}/>
        </div>
        }

        </div>
    </>
  );
};

export default AnimatedWindows;