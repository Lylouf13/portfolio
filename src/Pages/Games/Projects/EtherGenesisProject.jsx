import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import CtaButton from '../../../Components/CTA/CtaButton'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'


export default function EtherGenesisProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Ether Genesis</h1>
      <CtaButton title={"Itch.io"} link={"https://lylouf.itch.io/ether-genesis"} icon={"outerLink"}/>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Solo dev"]}/>
      <ProjectText 
      title={"Univers Étendu"}
      text={`Ether Genesis est un prequel spirituel à Ether (qui est également sur ce portfolio !). Il s'agit d'un projet de game jam réalisé sur 2 jours dans
        lequel le joueur contrôle une entité qui suit le curseur de sa souris. Cette entité est liée à un orbe qui va orbiter autour d'elle et qui va servir au joueur à 
        interagir avec son environnement. <br />
        En effet, le joueur souhaite éviter la majeure partie des contacts entre l'entité qu'il contrôle et les différents éléments de jeu, et doit utiliser son orbe pour
        les détruire. Il possède la capacité de stopper l'orbe, et de lui appliquer une force en direction de son entité. <br />
        Ether Genesis est jouable sur navigateur (desktop) sur sa page itch.io, dont le lien est juste au-dessus`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/EtherGenesis/etherGenesis_1.webp'} title={`La situation d'ouverture du jeu, qui sert 
        également de tutoriel rapide. On y voit l'entité du joueur ainsi que l'orbe qui l'accompagne`}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/EtherGenesis/etherGenesis_2.webp'} title={"Le joueur en train de combattre des invocateurs"}/>
      <ProjectText 
      text={`Le jeu se déploie sous la forme d'un combat à vagues : le joueur affronte des groupes d'ennemis prédéfinis aux comportements divers.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/EtherGenesis/etherGenesis_3.webp'} title={"L'orbe vient de détruire des ennemis"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/EtherGenesis/etherGenesis_4.webp'} title={"Le joueur, submergé par des invocateurs"}/>
      <ProjectText 
      text={`L'expérience se veut un peu flottante et visuellement explosive pour coller avec son univers d'origine (Ether, donc). Les effets sonores 
        se veulent très lourd, avec de la réverbération, et les effets visuels viennent donner un corps explosif et coloré aux différents éléments de jeu.
        Les différentes couches d'effet créent régulièrement un résultat visuellement chaotique.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/EtherGenesis/etherGenesis_5.webp'} title={"Un peu de chaos visuel"}/>
      </article>  
  )
}
