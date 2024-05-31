import React from 'react'
import './projectSlider.scss'
import data from '../../Datas/games.json'


import ProjectCard from '../../Components/ProjectCard/ProjectCard'

export default function ProjectSlider() {

  return (
    <div className='projectSlider'>
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
