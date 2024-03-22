import React from 'react'
import './BlinkedText.css'
export default function BlinkedText({ text = 'HALOFFAME' }) {
  console.log(text)
  return (
    <div className={` neon`}>
      <span className="blink" data-text={text}>
        {text}
      </span>
      <span className="gradient"></span>
      <span className="spotlitg"></span>
    </div>
  )
}
