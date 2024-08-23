import React from 'react'
import './ctaButton.scss'
import { Link } from 'react-router-dom'

export default function CtaButton(data) {
  return (
    <Link to={data.link} className={`cta${data.outline?' cta-outline':''}`}>
      <p>{data.title}</p>
      {data.icon && <img className='cta__icon'src={`/portfolio/Assets/Images/Misc/CtaIcons/${data.icon}.png`} alt={"icon"}/>}
    </Link>
  )
}
