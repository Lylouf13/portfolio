import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import CtaButton from '../../../Components/CTA/CtaButton'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'

export default function EtherProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Ether</h1>
      <CtaButton title={"Itch.io"} link={"https://lylouf.itch.io/ether"} icon={"outerLink"}/>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Game Designer","Développeur Unity"]}/>
      <ProjectText 
      title={"Pas un jeu à proprement parler"}
      text={`Ether est, techniquement, un jouet. C'est-à-dire qu'il n'a pas de conditions de victoire ni de défaite, ce qui le sépare du statut de jeu.
        Son intérêt repose dans l'interaction avec le système, et l'expérimentation, la manipulation par le joueur des différents éléments. <br />
        Plus concrètement, c'est un projet étudiant dans lequel le joueur contrôle une entité reliée à un orbe, qui va agir comme un fléau avec les déplacements
        du joueur, et avec lequel il va pouvoir déplacer les éléments de l'environnement.<br />
        Déplacer ces éléments va permettre au joueur d'en créer de nouveaux, qui vont peu à peu interagir entre eux, et finiront par créer des réactions en chaîne sans
        avoir besoin de l'intervention du joueur. <br />
        La dynamique du joueur (déplacer des éléments) va rentrer en friction avec celle du système (ramener les éléments au centre) et créer des situations plus ou moins
        émergentes. <br />
        Ether est téléchargeable sur itch.io , au format .exe (le lien est juste au dessus !)`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/Ether/ether_1.webp'} title={"Ether, situation initiale vers laquelle tend le système, les éléments sont regroupés au centre"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Ether/ether_2.webp'} title={"Le joueur a créé de nouveau éléments, on voit ici des composants oranges et des éléments jaunes"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Ether/ether_3.png'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Ether/ether_4.png'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Ether/ether_5.png'} title={`Situation de jeu avancée, la situation initiale est complètement destructurée et les
        réactions empêchent le retour à l'état initial`}/>

    </article>  
  )
}
