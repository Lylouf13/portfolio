import React from 'react'
import './projectText.scss'

export default function ProjectText(props) {
  return (
    <div className='projectText'>
        {props.title && <h2 className='projectText__title'>{props.title}</h2>}
        <p className='projectText__text'>{props.text}</p>
    </div>
  )
}
