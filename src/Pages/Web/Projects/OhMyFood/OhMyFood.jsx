import React from 'react'

import '../webProjects.scss'
import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectVideo from '../../../../Components/ProjectVideo/ProjectVideo'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'
import CtaButton from '../../../../Components/CTA/CtaButton'


export default function OhMyFood() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Ohmyfood</h1>
      <ProjectTechs technos={["html", "sass"]}/>
      <CtaButton title={"Projet Github"} link={"https://github.com/Lylouf13/oc4-ohmyfood"} icon={"outerLink"}/>

      <ProjectSkills title='Compétences associées' skills={["Intégration depuis une maquette", "Sass", "Animations CSS"]}/>

      <ProjectText 
        title={'Approche Mobile-first'}
        text={`Le site d'Ohmyfood est développé principalement pour des utilisateurs mobile, c'est donc naturellement que le développement
          et l'intégration des différents éléments ont démarré sur les formats mobiles, et ont ensuite été déployé vers le desktop`} 
      />
      <div className='webProject__container webProject__container-row'>
        <ProjectImage image={'/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_1.webp'} title={"Intégration mobile - homepage statique"}/>
        <ProjectImage image={'/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_2.webp'} title={"Intégration mobile - Cards des restaurants"}/>
        <ProjectImage image={'/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_3.webp'} title={"Intégration mobile - Page des restaurants"}/>
      </div>
      <ProjectText 
        title={'Éléments animés'}
        text={`Le site utilise des éléments interactifs avec des animations, le tout est effectué intégralement via CSS sans utiliser Javascript, y
          compris pour des éléments à état comme les éléments des menus de restaurants avec la checkmark`} 
      />
      <div className='webProject__container webProject__container-row'>
        <ProjectVideo link='/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_g1.webm' title="Loader & Homepage"/>
        <ProjectVideo link='/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_g2.webm' title="Navigation & Restaurants"/>
        <ProjectVideo link='/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_g3.webm' title="Interaction menus"/>
      </div>
      <ProjectText 
        title={'Intégration desktop'}
        text={"Les différents élements du site ont ensuité été déployés vers une version desktop / tablette"} 
      />
      <ProjectVideo link='/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_g5.webm' title="loading desktop ohmyfood"/>
      <ProjectImage image={'/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_7.webp'} desc="cards des restaurants"/>
      <ProjectVideo link='/portfolio/Assets/Images/Web/OhMyFood/ohmyfood_g6.webm' title="L'intégration desktop des différentes parties du site"/>

      <ProjectText 
        text={`La principale montée en compétence sur ce projet a été l'utilisation de Sass, ainsi que la définition de
          toute la structure de fichiers du site. En effet il s'agissait du premier projet pour lequel je n'avais pas de
          base de code à disposition. Cela m'a poussé à étudier la maquette du site et à planifier les différents éléments
          réutilisables, notamment au travers des mixins`} 
      />

    </article>
  )
}
