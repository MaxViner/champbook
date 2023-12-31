import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getFavorites, removeFromFavorites } from '../../utils/localStorage';
import styles from './Favorite.module.scss'
import { SlideItem } from '../imageSlider/SlideItem';
import exit from '../../assets/camon/exit.jpg'
import { Link } from 'react-router-dom';
import { HOME_ROUTE } from '../../routes/routes';
import HeartLoader from '../UI/HeartLoader/HeartLoader';
import LoadText from '../UI/LoadText/LoadText';
import BlinkedText from '../UI/BlinkedText/BlinkedText';
import Card from '../UI/Card/Card';
export default function Favorite() {
  const [isChecked, setIsCHecked]=useState(false)
  const [checkedPage, setCheckedPage]=useState({})
  const [checkedNumber, setCheckedNumber]=useState(0)
  const [loading, setLoading]=useState(true)

  const pages = useSelector((state) => state.pages);
  const [favorites, setFavorites]=useState(getFavorites())
  

  let citates=[]

  favorites.forEach(item => {
    let page = pages.find((page)=>page?.id===item?.id)
    let FavorCitates = []
    for (let index = 0; index < item.numbers.length; index++) {
    

      let citate = page?.citates.find(
        (citate)=>{
           return citate.number === item.numbers[index]
        }
      )
      FavorCitates.push(
        citate
      )
      
    }
   

    citates.push(
      {
        page:page,   
        FavorCitates: FavorCitates,
      }
  )
}
)

  useEffect(
    ()=>
    {
      setTimeout(
        ()=>{
          setLoading(false)
        },
        8000
      )
    },[]
  )

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

 useEffect(
  ()=>{
   setFavorites( getFavorites() )
  },[isChecked]
 )

  return (
  <>
    {isChecked?
      <SlideItem  
      {...checkedPage}  
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
    loading?
    <>
    <LoadText data={'Favorites'}
      className={styles.LoadText}/>
    <HeartLoader/>
    </>
    :
    <main className={styles.Favorites}>
      <Link to={HOME_ROUTE}>
      <img src={exit} width={'30px'} alt="exit" className={styles.exit} />
      </Link>
    <div className={styles.Favorites__title}>
     <BlinkedText text='Favorites'/>
    </div>
    
  <ul className={styles.List}>
   {citates.map((citate,index)=>{
    
    return   <li key={index}
              className={styles.List__item}> 
                <Card 
                  img={citate.page.img}
                  content={citate.FavorCitates}
                  id={citate.page.id} 
                  author={`${citate.page.author}`}>
                </Card>  
           
{/* 
                <img src={open} alt="open" role='button'
                 className={styles.List__item__icon}
                onClick={()=>HandleOpen(citate.page, citate.FavorCitateNumber)}
                />
              <img src={deleteicon} 
              onClick={()=>{
                removeFromFavorites(citate.page.id, citate.FavorCitateNumber)
                setFavorites(getFavorites())
              }}
              alt="delete" className={styles.deleteicon} width={'30px'}/> */}
          </li>
   })}
  </ul>
  </main>
  }
    
    </>
  )
}
