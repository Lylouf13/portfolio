import React from 'react'

import './projectTechs.scss'

export default function ProjectTechs(props) {
  return (
    <div className='projectTechs'>
      {props.technos.map((techno)=>
        <img
        className='projectTechs__icon'
        key={`Techs_icon_${techno}`} 
        src={`/Portfolio/Assets/Images/Web/TechIcons/icon_${techno}.webp`}
        alt={`${techno} logo`}
        />)
      }
    </div>
  )
}
