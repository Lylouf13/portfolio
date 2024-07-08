import React from 'react'
import './projectImage.scss'

export default function ProjectImage(props) {
  return (
    <div className='projectView'>
        <img className='projectView__image'src={props.image}/>
        <h3 className='projectView__title'>{props.title}</h3>
    </div>
  )
}
