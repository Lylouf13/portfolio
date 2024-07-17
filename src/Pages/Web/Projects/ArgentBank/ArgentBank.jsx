import { React } from 'react'

import '../webProjects.scss'

import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'


export default function ArgentBank() {

  return (
    <section className='webProject'>
      <h1 id='#title'className='webProject__title'>ArgentBank</h1>
      <ProjectTechs technos={["React", "Sass"]}/>
      <ProjectSkills title='Compétences associées' skills={["Redux", "Calls API", "Intégration React"]}/>
      <ProjectText 
      title={"Portage"}
      text={`Argent Bank est un projet pour lequel les différents éléments visuels étaient déjà prêts, mais qui nécessitait un portage sur React, le gros du projet
        résidait dans l'intégration des fonctionnalités : login et récupération de données.`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/ArgentBank/argentBank_1.png'} title={"Homepage Argent Bank"}/>
      <ProjectText 
      title={'Redux'}
      text={`La récupération des différentes données et le système de login se font via une api qui interagit avec la base de données faite avec MongoDB.
        Toutes ces interactions sont gérées avec un store Redux, qui permet de manipuler les données à l'échelle de l'application React plus facilement qu'avec
        des transferts de données entre components classiques. <br />
        Redux permet ainsi via l'api de valider le login utilisateur, puis de récupérer et stocker les différentes informations contenues dans la base de données afin 
        de les afficher à l'utilisateur`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/ArgentBank/argentBank_2.png'} title={"Page des comptes de l'utilisateur, accessible uniquement via login avec un token"}/>
      <ProjectText 
      text={`Parmi les interactions disponnibles, l'utilisateur doit être en mesure de modifier son nom d'utilisateur, mais pas son nom et prénom. Cette feature
        implique d'envoyer une requête de modification de données à la DB via l'api, puis de modifier les informations contenues dans le store Redux côté utilisateur.`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/ArgentBank/argentBank_3.png'} title={""}/>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/ArgentBank/argentBank_4.png'} title={`Panneau de modification du nom d'utilisateur`}/>

      <ProjectText 
      text={`J'ai également écrit des modèles de structure de données et une base d'api pour les features suivantes du site, à savoir les détails des transactions pour
        les différents compte, allant de la récupération des données à la modification de leurs détails par l'utilisateur.`}
      />

    </section>
  )
}
