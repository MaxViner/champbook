import React from 'react'
import LogoSvg from './Logo.svg'
import styles from './Logo.module.scss'
export default function Logo({ className }) {
  return (
    <div className={`${styles.Logo} ${className}`}>
      <img src={LogoSvg} alt="Logo" />
    </div>
  )
}
