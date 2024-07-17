import React from 'react'

import '../webProjects.scss'
import ProjectVideo from '../../../../Components/ProjectVideo/ProjectVideo'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'

export default function SevenEvents() {
  return (
    <section className='webProject'>
      <h1 id='#title' className='webProject__title'>724 Events</h1>
      <ProjectTechs technos={["react", "sass"]}/>
      <ProjectSkills title='Compétences associées' skills={["Débug de code pré-existant", "Utilisation de fichiers JSON", "Tests"]}/>
      <ProjectText 
        title={`Bug Fixing`}
        text={`Le site de 724 est un projet un peu différent des autres, l'exercice était ici centré sur du débugging d'éléments.
          Pas de nouveaux éléments à intégrer donc, mais toute une structure de code existante à appréhender et un certain nombre
          de features cassées à faire fonctionner. <br />
          L'objectif était des faire passer au site les différents tests qui avaient été écrits au préalable pour les différentes features
          intégrées.`}
      />
      <ProjectVideo link='/Portfolio/Assets/Images/Web/724Events/724Events_slider.webm' title='Le slider du site fonctionnel'/>
      <ProjectText 
        text={`La partie haute du site comportait quelques bugs mineurs, les éléments de navigations n'étaient pas liés aux bons id
          pour envoyer l'utilisateur à l'endroit attendu. Quant au slider, il ne loopait pas en arrivant à la fin des éléments, faisant un arret
          sur une slide blanche, il a donc fallu rajouter des conditions pour lui permettre de fonctionner correctement`}
      />
      <ProjectText
        title={'Tri et affichage'} 
        text={`Le plus gros chantier du site était la partie des réalisations de 724 Events, qui permet à l'utilisateur de faire un tri par catégorie,
          en affichant 9 projets par page et en adaptant le nombre de pages en fonction des éléments présents dans la catégorie sélectionnée. <br />
          Tout cela a nécessité de trier et recouper les informations reçues depuis le json, puis de les afficher par blocs de 9 maximum`}
      />
      <ProjectVideo link='/Portfolio/Assets/Images/Web/724Events/724Events_filter.webm' title={`L'affichage du filtrage de projets`}/>

      <ProjectText
        text={`Les derniers éléments corrigés étaient mineurs, des typos dans des déclarations, des éléments temporaire ou de test intégrés d'une 
          façon qui ne passait pas les tests malgré un fonctionnement correct (une fois de plus, des typos ou une nomenclature approximative étant la
          source des erreurs)`}
      />

    </section>
  )
}
