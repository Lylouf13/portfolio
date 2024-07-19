import {React} from 'react'
import { Link } from 'react-router-dom'

import './webProjectCard.scss'

export default function WebProjectCard(data) {

  return (
    <Link className='webProjectCard' to={`${data.link}#project`} draggable="false">
          <h2 className="webProjectCard__title" draggable="false"> {data.title}</h2>
          <img className='webProjectCard__image' draggable="false" src={data.cover} alt={data.description} />
          <div className='webProjectCard__techIcons'>
            {data.technos.map((techno)=>
              <img
              className='webProjectCard__techIcons__icon'
              key={`card_${data.id}_icon_${techno}`} 
              src={`/Portfolio/Assets/Images/Web/TechIcons/icon_${techno}.webp`}
              alt={`${techno} logo`}
              />)
            }
          </div>
    </Link>
  )
}
