import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectVideo from '../../../Components/ProjectVideo/ProjectVideo'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import CtaButton from '../../../Components/CTA/CtaButton'

export default function LightyProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Lighty</h1>
      <CtaButton title={"Itch.io"} link={"https://lylouf.itch.io/apple-on-the-walls"} icon={"outerLink"}/>
      <ProjectText 
      title={"Puzzle Platformer"}
      text={`Argent Bank est un projet pour lequel les différents éléments visuels étaient déjà prêts, mais qui nécessitait un portage sur React, le gros du projet
        résidait dans l'intégration des fonctionnalités : login et récupération de données.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/AOTW/aotw_1.webp'} title={"NYI"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/AOTW/aotw_2.webp'} title={"NYI"}/>

      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g1.webm' title={`NYI`}/>
      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g2.webm' title={`NYI`}/>
      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g3.webm' title={`NYI`}/>
    </article>  
  )
}
