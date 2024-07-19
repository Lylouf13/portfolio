import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectVideo from '../../../Components/ProjectVideo/ProjectVideo'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import CtaButton from '../../../Components/CTA/CtaButton'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'


export default function AotwProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Apple On The Walls</h1>
      <CtaButton title={"Itch.io"} link={"https://lylouf.itch.io/apple-on-the-walls"} icon={"outerLink"}/>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Solo dev"]}/>
      <ProjectText 
      title={"Puzzle Platformer"}
      text={`Apple On The Walls est un projet de game jam que j'ai réalisé en solo, le thème était "Wall Jump". <br />
        Étant un grand fan de platformer 2D, en particulier des titres comme Super Meat Boy, ou son successeur The End Is Nigh, j'ai décidé
        de faire un projet reprenant certains principes de design sur lesquels je reviendrai. <br />
        Le concept d'Apple On The Walls est d'amener la pomme jusqu'à la case WIN, pour celà cependant, pas question de déplacer la pomme par ses propres moyens,
        le joueur n'a accès qu'à des blocs annotés, qui sont actionnés par les touches de clavier correspondantes.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/AOTW/aotw_1.webp'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/AOTW/aotw_2.webp'}/>

      <ProjectText 
      text={`Parmi les éléments de design importants, on retrouve les niveaux occupant un écran plein (pas de scrolling, le joueur voit l'intégralité du niveau à tout moment)
        et la réapparition rapide en cas d'échec. <br />
        Le reste de l'intérêt de jeu vient du level design et de l'aspect combinatoire des différents éléments`}
      />
      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g1.webm'/>
      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g2.webm'/>
      
      <ProjectText 
      text={`Je pense qu'il est approprié de noter que le jeu Baba Is You a eu une influence plus qu'importante dans les choix de direction artistique, que ce soit sur
        le rendu "developer art" ou sur les différents effets de particules.`}
      />
      <ProjectVideo link='/portfolio/Assets/Images/Games/AOTW/aotw_g3.webm'/>
    </article>  
  )
}
