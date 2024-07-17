import React from 'react'

import '../webProjects.scss'

import ProjectVideo from '../../../../Components/ProjectVideo/ProjectVideo'
import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'


export default function SophieBluel() {
  return (
    <section className='webProject'>
      <h1 id='#title' className='webProject__title'>Sophie Bluel</h1>
      <ProjectTechs technos={["html", "js", "css"]}/>
      <ProjectSkills title='Compétences associées' skills={["Appels API JS", "Feedbacks utilisateur", "Intégration"]}/>

      <ProjectText 
      title={"Api et Javascript"}
      text={`Le projet du portfolio de Sophie Bluel a été ma première interaction avec une api, qui m'a été utile pour gérer le système de login
        et la récupération des informations des projets. <br />
        
        Ce projet était découpé en deux grandes parties, login et tri des projets d'une part, et ajout / suppression de projets ensuite.
        Pour chacune de ces tâches, très peu d'intégration était nécessaire, le gros du projet était surtout de l'ordre de la récupération et
        de la manipulation de données depuis l'api, via javascript. <br />
        
        Lorsque l'utilisateur n'est pas connecté, la section projet affiche un système de tri, qui permet de visualiser seulement une catégorie spécifique de projets, ou
        bien toutes les catégories simultanément.`}
      />
      <ProjectVideo link='/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_tri.webm' title={`Navigation entre la homepage et la location`}/>

      <ProjectText 
      text={`A l'inverse, lorsque l'utilisateur est connecté, il a accès à une fenêtre de modification, qui lui permet de supprimer les projets
        déjà existants, mais également d'en ajouter de nouveaux`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_1.png'} title={"La section projets"}/>
      
      <ProjectText 
      title={"Modale et feedbacks"}
      text={`Cette fenêtre lui permet de créer de nouveaux éléments à afficher, et n'enverra la requête api que si l'intégralité des champs sont bien
        remplis par l'utilisateur. Elle lui renverra un feedback négatif si des champs sont incomplets, et modifiera à l'inverse le bouton de validation
        si tout est complet.`}
      />
      <div className='webProject__container webProject__container-row'>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_2.png'} title={"Modale de gestion des projets"}/>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_3.png'} title={"Modale d'ajout de projet vide"}/>
      </div>
      <div className='webProject__container webProject__container-row'>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_4.png'} title={"Modale d'ajout de projet remplie"}/>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/SophieBluel/sophieBluel_5.png'} title={"Modale d'ajout de projet incomplète"}/>
      </div>

    </section>
  )
}
