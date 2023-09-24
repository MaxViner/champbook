import React from 'react'
import styles from './LoadText.module.scss'
export default function LoadText({data, className}) {
  return (
    <h1 data-text={data}
    className={`${styles.LoadText} ${className}`}>
        {data}
    </h1>
  )
}
