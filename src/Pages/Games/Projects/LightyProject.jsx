import React from 'react'

import ProjectImage from '../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../Components/ProjectText/ProjectText'
import CtaButton from '../../../Components/CTA/CtaButton'
import ProjectSkills from '../../../Components/ProjectSkills/ProjectSkills'

export default function LightyProject() {
  return (
    <article className='webProject'>
      <h1 className='webProject__title'>Lighty</h1>
      <CtaButton title={"Itch.io"} link={"https://thephenomn.itch.io/lighty"} icon={"outerLink"}/>
      <ProjectSkills title={"Rôle sur le projet"}skills={["Game Designer","Level Designer, Interface"]}/>
      <ProjectText 
      title={"Outil multifonction"}
      text={`Lighty est originellement un projet étudiant en 2D qui avait été abandonné, auquel nous avons redonné vie 
        avec deux amis respectivement développeur et artiste 3D, en 3D cette fois, lors d'une game jam. <br />
        Le joueur incarne un esprit dans un environnement plongé dans le noir. Il possède 3 orbes de lumière qu'il peut placer et rapeler à sa guise. Ces orbes lui servent
        à la fois à voir les éléments autour de lui, mais également à interagir avec certains objets : leviers ou cristaux par exemples <br />
        Le jeux est un enchaînement de puzzles à résoudre pour le joueur.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/Lighty/lighty_2.webp'} title={"Le joueur avec un orbe placé et une torche partiellement activée"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Lighty/lighty_3.webp'}/>
      <ProjectText 
      text={`Le jeu tourne autour du fait de devoir explorer les environnements, faire de la reconnaissance pour comprendre comment accéder à la partie suivante, puis
        à exécuter les étapes nécessaires, souvent en ayant de moins en moins de visibilité car une partie des orbes sont utilisés, d'où l'intérêt pour le joueur de bien 
        explorer et comprendre ce qui l'entoure.`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Games/Lighty/lighty_4.webp'}/>
      <ProjectImage image={'/portfolio/Assets/Images/Games/Lighty/lighty_5.webp'} title={"Une passerelle permettant de traverser un gouffre"}/>

    </article>  
  )
}
