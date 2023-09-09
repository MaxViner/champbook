import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { getFavorites } from '../../utils/localStorage';
import styles from './Favorite.module.scss'
import open from '../../assets/camon/open.png'
import { SlideItem } from '../imageSlider/SlideItem';
export default function Favorite() {
  const [isChecked, setIsCHecked]=useState(false)
  const [checkedPage, setCheckedPage]=useState({})
  const [checkedNumber, setCheckedNumber]=useState(0)

  const pages = useSelector((state) => state.pages);
  const favorites= getFavorites()
  let citates=[]

  favorites.forEach(item => {
    let page= pages.find((page)=>page?.id===item?.id)
    let FavorCitate=page?.citates.find((citate)=>citate?.number===item?.number)
    citates.push(
      {
        page:page,   
        FavorCitate: FavorCitate?.text,
        FavorCitateNumber:item.number,
      }
  )
})
 
console.log(isChecked);

 const HandleOpen=(page, FavorCitateNumber)=>{
  setCheckedPage(page)
  setCheckedNumber(FavorCitateNumber)
  setIsCHecked(true)
 }
 
 const [expanded, setExpanded] = useState(false);

 const toggleExpand = () => {
   
     setTimeout(() => {
       setExpanded(!expanded);
     }, 900);
   
 };

  return (
  <>
    {isChecked?
      <SlideItem  {...checkedPage}  
      expanded={expanded}
      toggleExpand={toggleExpand}
      citateNumber={checkedNumber}
      HandleClose={()=>{
        setCheckedPage({})
        setCheckedNumber(0)
        setIsCHecked(false)
      }  
      } />
    :
    <main className={styles.Favorites}>
    <h1 className={styles.Favorites__title}>
      Favorites
    </h1>

  <ul className={styles.List}>
   {citates.map((citate,index)=>{
    console.log(citate);
    return   <li key={index}
              className={styles.List__item}>   
            <p>
                {citate.FavorCitate}
              </p>
                <span className={styles.List__item__author}>
                © {citate.page.author} 

                <img src={open} alt="open" role='button'
                 className={styles.List__item__icon}
                onClick={()=>HandleOpen(citate.page, citate.FavorCitateNumber)}
                />
              </span>
          </li>
   })}
  </ul>
  </main>
  }
    
    </>
  )
}
