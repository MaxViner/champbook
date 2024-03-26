import React, { useEffect, useState } from 'react'
import styles from './CitateItem.module.scss'
import { LikeSection } from '../../UI/liker/Like'
import { checkFavorite } from '../../../utils/localStorage'

export default function CitateItem({
  citate,
  id,
  citateNumber,
  className,
  onHeartClick,
}) {
  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {
    setIsFilled(checkFavorite(id, citateNumber))
  }, [citateNumber])
  return (
    <div
      className={`${styles.CitateItem} ${className} 
    ${isFilled ? styles.favorite : ''}`}
    >
      <div className={`${styles.CitateItem__text}`}>{citate}</div>
      <div className={`${styles.heart} `}>
        <LikeSection
          id={id}
          citateNumber={citateNumber}
          setIsFilled={setIsFilled}
          isFilled={isFilled}
          onHeartClick={onHeartClick}
        />
      </div>
    </div>
  )
}
