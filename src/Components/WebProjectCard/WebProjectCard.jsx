import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'

import './webProjectCard.scss'

export default function WebProjectCard(data) {
  const handleOnClick= (e)=>{
                    // event => CARD_IMAGE => CARD => CARD CONTAINER 
    const container = e.target.parentNode.parentNode.parentNode

    // Calculates distance from click position to the end of the cards container, based on container rendered height
    const basePos = e.pageY
    const endPos = e.pageY+((container.clientHeight) - (e.pageY - container.offsetTop))
    setTimeout(scrollToProject(basePos,endPos), 100)


  }
  const scrollToProject=(start, end)=>{
    // Faire des tests avec element.scrollIntoView
    //console.log(start, end)
    window.scroll(start, end)
  }

  return (
    <Link onClick={handleOnClick} className='webProjectCard' to={data.link} draggable="false">
          <h2 className="webProjectCard__title" draggable="false"> {data.title}</h2>
          <img className='webProjectCard__image' draggable="false" src={data.cover} alt={data.description} />
          <div className='webProjectCard__techIcons'>
            {data.technos.map((techno)=>
              <img
              className='webProjectCard__techIcons__icon'
              key={`card_${data.id}_icon_${techno}`} 
              src={`/Portfolio/Assets/Images/Web/TechIcons/icon_${techno}.png`}
              alt={`${techno} logo`}
              />)
            }
          </div>
    </Link>
  )
}
