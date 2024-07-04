import React from 'react'
import './ctaButton.scss'
import { Link } from 'react-router-dom'

export default function CtaButton(data) {
  return (
    <Link to={data.link} className='cta'>{data.title}</Link>
  )
}
