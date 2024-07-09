import React from 'react'
import './projectImage.scss'

export default function ProjectImage(props) {
  return (
    <figure className='projectView'>
        <img className='projectView__image'src={props.image}/>
        <figcaption className='projectView__title'>{props.title}</figcaption>
    </figure>
  )
}
