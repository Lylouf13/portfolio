import React from 'react'
import './ctaButton.scss'
import { Link } from 'react-router-dom'

export default function CtaButton(data) {
  return (
    <Link to={data.link} className='cta'>
      <p>{data.title}</p>
      {data.icon && <img className='cta__icon'src={`/Portfolio/Assets/Images/Misc/CtaIcons/${data.icon}.png`} alt={"icon"}/>}
    </Link>
  )
}
