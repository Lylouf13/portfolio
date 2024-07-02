import React from 'react'
import './illustratedText.scss'

export default function IllustratedText(data) {
  return (
    <div className='container'>
        <p className='container__text'>{data.text}</p>
        <img className='container__image' src={data.imageLink} />
    </div>
  )
}
