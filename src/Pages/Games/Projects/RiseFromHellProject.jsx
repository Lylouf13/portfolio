import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'


export default function RiseFromHellProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Rise From Hell</h1>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Game Designer","Sound Designer"]}/>
      <ProjectText 
      title={"Un séjour en enfer"}
      text={`Et si un nécromancien se retrouvait en enfer, dans la section où les âmes damnées sont occupées à travailler sous le joug des démons ? C'est
        globalement la question que pose Rise From Hell, un projet de jeu d'Infiltration / Stratégie, dans lequel le joueur incarne donc ce nécromancien, 
        transformé en liche après un rituel ayant mal tourné, et qui doit à présent conquérir ce qui doit être son nouveau royaume. <br />
        Le joueur peut donc prendre le contrôle de travailleurs faibles, et leur donner des ordres, ou bien les sacrifier pour accroître son pouvoir personnel,
        lui permettant de contrôler des unités plus puissantes, ou bien d'intervenir ponctuellement dans des batailles. Le contrôle d'unités et l'évitement
        des affrontements est le nerf de la guerre`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/RiseFromHell/riseFromHell_1.webp'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/RiseFromHell/riseFromHell_5.webp'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/RiseFromHell/riseFromHell_2.webp'} title={"Le nécromancien attaque un archer avec une petite troupe de travailleurs"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/RiseFromHell/riseFromHell_3.webp'} title={"Contrôler un archer peut s'avérer très utile lors des combats"}/>
      <ProjectText 
      title={"Fragile mais puissant"}
      text={`Le contrôle d'unités et l'évitement des affrontements sont le nerf de la guerre avant d'avoir monté une petite troupe, car le nécromancien seul est
      extrêmement fragile, et incapable de combattre`}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/RiseFromHell/riseFromHell_4.webp'} title={"Une petite troupe accompagne le nécromancien, qui est désormais bien renforcé"}/>

    </article>  
  )
}
