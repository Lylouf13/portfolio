import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'


export default function ColorDamageProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Color Damage</h1>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Game Designer","Développeur / Construct"]}/>
      <ProjectText 
      title={"Shoot'em Up tricolore "}
      text={`Color Damage est un projet de groupe de première année d'étude à l'ICAN, dans lequel le joueur contrôle un vaisseau attaché à un cercle,
        autour duquel il peut tourner. Il peut également tirer des projectiles de 3 couleurs différentes, qui détruiront les éléments de même couleur. Il peut quant à lui
        traverser les éléments de sa propre couleur. <br />
        Le prototype comportait deux situation de jeu, une situation de vague de patterns à esquiver / détruire, et une autre de boss fight.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/ColorDamage/colorDamage_2.webp'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/ColorDamage/colorDamage_3.webp'} title={"Deux patterns de Color Damage"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/ColorDamage/colorDamage_1.webp'} title={"Le boss du prototype"}/>

    </article>  
  )
}
