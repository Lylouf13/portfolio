import React from 'react'
import './projectText.scss'

export default function ProjectText(props) {

  const text = props.text.split('<br />')

  return (
    <div className='projectText'>
        {props.title && <h2 className='projectText__title'>{props.title}</h2>}
        {text.map((part, index) => <p key={`"line-"${index}`}className='projectText__text'>{part}</p>)}
    </div>
  )
}
