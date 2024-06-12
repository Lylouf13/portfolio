import React, {useState, useRef} from 'react'
import './projectSlider.scss'
import data from '../../Datas/games.json'

import ProjectCard from '../../Components/ProjectCard/ProjectCard'

export default function ProjectSlider() {

  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)
  const slider = useRef()

  const handleMouseDown = (e) =>{
    setIsDown(true)
    setStartX(e.pageX - slider.current.offsetLeft)
    setScrollLeft(slider.current.scrollLeft)
  }
  const handleMouseUp = () =>{
    setIsDown(false)
  }
  const handleMouseLeave = () =>{
    setIsDown(false)
  }

  const handleMouseMove = (e) =>{
    if(!isDown) return
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft
    const walk = (x - startX) * 1.5
    //var prevScrollLEft = slider.scrollLeft
    slider.current.scrollLeft = scrollLeft - walk
  }

  return (
    <div className='projectSlider'
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseLeave}
      ref={slider}
    >
      {data.map((project, index) =>
          <ProjectCard 
            id={project.id} 
            key={project.id} 
            title={project.title} 
            cover={project.cover} 
            description={project.description} 
            link={project.link}
          />
      )
      }
    </div>
  )
}
