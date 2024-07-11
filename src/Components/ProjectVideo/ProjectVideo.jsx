import React from 'react'

import './projectVideo.scss';

export default function ProjectVideo(props) {
  return (
    <figure className='projectVideo'>
      <video className='projectVideo__media'src={props.link} autoPlay muted loop />
      <figcaption className='projectVideo__title'>{props.title}</figcaption>
    </figure>
  )
}
