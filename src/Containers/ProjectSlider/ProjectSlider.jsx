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


  // Reset temporary classes from both slider and cards
  // These classes are added to give better UX on drag&drop 
  // and avoid accidental clicking while rolling the slider
  function resetStates(){
    changedCards.forEach((e) =>{
      e.offsetParent.className = 'projectCard'
    })
    changedCards.length = 0
    if(slider.current.className !== 'projectSlider'){
      slider.current.className = 'projectSlider'
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
    if(e.target.offsetParent.className === 'projectCard')
    {
      e.target.offsetParent.className += ' projectCard-broken -active'
      changedCards.push(e.target)
    }
    if(slider.current.className === 'projectSlider'){
      slider.current.className += ' -active'
    }
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
