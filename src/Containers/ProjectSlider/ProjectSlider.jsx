import React, {useState, useRef} from 'react'
import './projectSlider.scss'
import data from '../../Datas/games.json'

import ProjectCard from '../../Components/ProjectCard/ProjectCard'

export default function ProjectSlider() {

  const [isDown, setIsDown] = useState(false)
  const [startX, setStartX] = useState(null)
  const [scrollLeft, setScrollLeft] = useState(null)
  const slider = useRef()
  const changedCards = []


  // Enables interactions after exiting slide state
  function resetStates(){
    changedCards.forEach((e) =>{
      e.offsetParent.className = 'projectCard'
    })
    changedCards.length = 0
    if(slider.current.className !== 'projectSlider'){
      slider.current.className = 'projectSlider'
    }
  }
  // Disables interactions with cards during slide
  function disableInteraction(e){
    if(e.target.offsetParent.className === 'projectCard')
      {
        e.target.offsetParent.className += ' projectCard-jsDisabled'
        changedCards.push(e.target)
      }
      if(slider.current.className === 'projectSlider'){
        slider.current.className += ' -jsActive'
      }
  }
  
  const handleMouseDown = (e) =>{
    setIsDown(true)
    setStartX(e.pageX - slider.current.offsetLeft)
    setScrollLeft(slider.current.scrollLeft)
  }
  const handleMouseUp = () =>{
    setIsDown(false)
    resetStates()
  }
  const handleMouseLeave = () =>{
    setIsDown(false)
    resetStates()
  }

  const handleMouseMove = (e) =>{
    if(!isDown) return
    disableInteraction(e)
    const x = e.pageX - slider.current.offsetLeft
    const movement = (x - startX) * 1.5
    slider.current.scrollLeft = scrollLeft - movement
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
