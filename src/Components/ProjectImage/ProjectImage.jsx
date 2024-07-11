import React from 'react'
import './projectImage.scss'

export default function ProjectImage(props) {
  return (
    <figure className='projectView'>
        <img className='projectView__media'src={props.image} alt={props.title ? props.title : props.desc}/>
        <figcaption className='projectView__title'>{props.title}</figcaption>
    </figure>
  )
}
