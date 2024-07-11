import React from 'react'

import './projectVideo.scss';

export default function ProjectVideo(props) {
  return (
    <video className='projectVideo'src={props.link} autoPlay muted loop />
  )
}
