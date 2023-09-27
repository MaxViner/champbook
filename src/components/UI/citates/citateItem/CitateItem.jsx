import React, {useEffect, useState} from 'react'
import styles from './CitateItem.module.scss'
import { LikeSection } from '../../Liker/Like';
import { checkFavorite } from '../../../../utils/localStorage';


export default function CitateItem({citate,id, citateNumber}) {
    

    const [isFilled, setIsFilled] = useState(false);
   
   
   
    
    useEffect(() => {
      console.log(citateNumber);
      setIsFilled(checkFavorite(id, citateNumber));
    }, [citateNumber]);

  return (
    <div className={styles.CitateItem}>
    <div className={styles.CitateItem__text}>
        {citate}
      </div>
      <div className={styles.heart}> 
            <LikeSection
                  id={id}
                //   citateNumber={citateNumber}
                  setIsFilled={setIsFilled}
                  isFilled={isFilled}
                />
    </div>
    </div>
  )
}
