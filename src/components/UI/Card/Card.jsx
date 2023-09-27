import React from 'react'
import styles from './Card.module.scss'
import CitateItem from '../citates/citateItem/CitateItem';
export default function Card({content, img, author, id}) {
    console.log('content');
    console.log(content);

  return (
    <div className={styles.card} >
        <div className={`${styles.face} ${styles.top}`}>
            <div className={styles.content}>
                <div className={styles.img}>
                    <img src={img} alt="" />
               
                </div>
                <span className={styles.author}>
                     {author}
                </span>
                </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
                <div className={styles.content}>
                    <ul className={styles.citates}>

                    {content && content.map((citate)=>{
                        return <li>
                            <CitateItem
                            citateNumber={citate?.number}
                            id={id}
                            citate={citate?.text}
                            />
                            
                        </li>
                    })}
                    </ul>
                </div>
           
        </div>
    </div>
  )
}
