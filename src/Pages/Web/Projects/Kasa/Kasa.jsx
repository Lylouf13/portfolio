import React from 'react'

import '../webProjects.scss'

import ProjectVideo from '../../../../Components/ProjectVideo/ProjectVideo'
import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'
import CtaButton from '../../../../Components/CTA/CtaButton'


export default function Kasa() {
  return (
    <section className='webProject'>
      <h1 className='webProject__title'>Kasa</h1>
      <ProjectTechs technos={["react", "sass"]}/>
      <CtaButton title={"Projet Github"} link={"https://github.com/Lylouf13/oc8_kasa"} icon={"outerLink"}/>

      <ProjectSkills title='Compétences associées' skills={["Intégration React", "React Router", "Génération de contenu à partir d'un JSON"]}/>
      <ProjectText 
      title={"Intégration React"}
      text={`Kasa est le premier projet que j'ai eu à gérer de A à Z en utilisant React. Cela à impliqué une première partie de "pré-production" centrée
        sur l'analyse de la maquette du site afin de repérer les différents éléments réutilisables, et réfléchir à la structure des fichiers du site. <br />
        Les éléments de contenu du site sont générés via un fichier JSON, qui permet à la fois de créer les différentes cards visibles depuis la homepage, mais
        également de passer le contenu à afficher sur les pages d'informations des locations, via un système d'id`}
      />
      <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_1.webp'} title={"Homepage de Kasa, montre les différentes locations disponibles"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_2.webp'} title={"La section 'A propos' du site, qui utilise les mêmes components cliquables que les pages de locations"}/>
      <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_3.webp'} title={"Une page de location, statique"}/>

      <ProjectText 
      text={`Lors du clic sur une des cards, la page est générée en fonction des informations liée à l'id de la location, qui permet de récupérer les images du bien, et de générer
        slider pour afficher les différentes images lorsqu'il y en a plusieurs, les informations de locataire, les tags, les informations complémentaires du bien`}
      />
      <ProjectVideo link='/portfolio/Assets/Images/Web/Kasa/kasa_location.webm' title={`Navigation entre la homepage et la location`}/>

      <ProjectText 
      title={'Responsive'}
      text={`Ces différents éléments ont également reçu leur intégration responsive pour mobile, avec très peu de modifications, surtout de l'adaptation d'affichage`}
      />
      <div className='webProject__container webProject__container-row'>
        <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_5.webp'} title={"Homepage Mobile"}/>
        <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_4.webp'} title={"Page de location Mobile"}/>
        <ProjectImage image={'/portfolio/Assets/Images/Web/Kasa/kasa_6.webp'} title={"A propos Mobile"}/>
      </div>
    </section>
  )
}