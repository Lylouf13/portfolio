import React from 'react'
import './projectText.scss'

export default function ProjectText(props) {

  const text = props.text.split('<br />')
  console.log(text)

  return (
    <div className='projectText'>
        {props.title && <h2 className='projectText__title'>{props.title}</h2>}
        {props.text && text.map((part, index) => <p key={`"line-"${index}`}className='projectText__text'>{part}</p>)}
    </div>
  )
}
