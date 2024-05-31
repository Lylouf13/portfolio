import React from 'react'
import './projectCard.scss';

import { Link } from 'react-router-dom'


export default function ProjectCard(data) {
  return (
    <Link className='projectCard' to={data.link}>
        <h2 className="projectCard__title"> {data.title}</h2>
        <img className='projectCard__image' src={data.cover} alt={data.description} />
    </Link>
  )
}
