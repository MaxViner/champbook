import React, { useState } from 'react'
import styles from './Random.module.scss'
import  arrow from '../../assets/camon/left-arrow-svgrepo-com.svg'
import { SlideItem } from '../imageSlider/SlideItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import exit from '../../assets/camon/exit.jpg'
import reboot from '../../assets/camon/reboot.jpg'
export  const Random=({data}) =>{
  const pages = useSelector((state) => state.pages);
  const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * pages.length) || 0)
  console.log(pages);
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
      setTimeout(() => {
        setExpanded(!expanded);
      }, 900);
    }
  
  return (
    <main className={styles.main}>
    <SlideItem {...pages[randomIndex] }
     expanded={expanded}
     toggleExpand={toggleExpand}/>

    <div className={styles.btnContainer}>

    <button className={styles.exit}>
      <Link to={'/'}>
        <img src={exit} alt="exit"  />
      </Link>
    </button>
    
    <button 
      className={styles.reboot}
      onClick={()=>setRandomIndex(Math.floor(Math.random() * pages.length))}>
      <img src={reboot} alt="reboot"  />
    </button>
    </div>
    
  </main>   )
}
