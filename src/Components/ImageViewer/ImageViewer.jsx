import React from 'react'

import './imageViewer.scss'

export default function ImageViewer(data) {
  return (
    <figure onClick={data.closeViewer} className={`viewer ${data.open ? 'viewer-open' : ''}`}>
        <img onClick={data.closeViewer} className='viewer__image' alt='dede' src={data.image}/>
        <figcaption onClick={data.closeViewer} className='viewer__title'>- {data.title} -</figcaption>
    </figure>
  )
}
