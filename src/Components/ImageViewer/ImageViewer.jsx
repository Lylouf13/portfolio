import React from 'react'

import './imageViewer.scss'

export default function ImageViewer(data) {
  return (
    <div onClick={data.closeViewer} className={`viewer ${data.open ? 'viewer-open' : ''}`}>
        <img onClick={data.closeViewer} className='viewer__image' alt='dede' src={data.image}/>
        <h2 onClick={data.closeViewer} className='viewer__title'>- {data.title} -</h2>
    </div>
  )
}
