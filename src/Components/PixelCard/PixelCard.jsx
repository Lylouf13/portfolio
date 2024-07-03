import React from 'react'
import './pixelCard.scss'

export default function PixelCard(data) {

  return (
    // Cards get "pixelGrid__type-id" as an extra class for grid construction purposes, which is done in pixelGrid.scss
    <div className={`pixelCard pixelGrid__${data.type}-${data.id}`}>
        <h2 className='pixelCard__title'>{data.title}</h2>
        <img className='pixelCard__image' src={data.image} alt="" />
    </div>
  )
}
