import React from 'react'

import './webProjects.scss'

import WebProjectCard from '../../Components/WebProjectCard/WebProjectCard'
import data from '../../Datas/webProjects.json'

export default function WebProjects() {
  return (
    <div className='webProjects'>
        {data.map((project, index) =>
            <WebProjectCard 
              id={project.id} 
              key={`webCard_${project.id}_${project.title}`} 
              title={project.title} 
              cover={project.cover} 
              description={project.description} 
              link={project.link}
              technos={project.technos}
            />
        )
        
        }


    </div>
  )
}
