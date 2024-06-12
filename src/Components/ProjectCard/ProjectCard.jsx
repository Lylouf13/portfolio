import React from 'react'
import './projectCard.scss';

import { Link } from 'react-router-dom'

const handleMouseUp = (e) =>{
  e.preventDefault()
}

export default function ProjectCard(data) {
  return (
    <Link className='projectCard' to={data.link} draggable="false" onMouseUp={handleMouseUp}>
        <h2 className="projectCard__title"> {data.title}</h2>
        <img className='projectCard__image' src={data.cover} alt={data.description} />
    </Link>
  )
}
