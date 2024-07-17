import React from 'react'

import '../webProjects.scss'
import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'


export default function NinaCarducci() {
  return (
    <section  className='webProject'>
      <h1 id='#title' className='webProject__title'>Nina Carducci - Portfolio</h1>
      <ProjectTechs technos={["html", "js", "css"]}/>
      <ProjectSkills title='Compétences associées' skills={["Optimisation de site", "Référencement Local", "Accessibilité"]}/>
      <ProjectText 
      title={"Optimisation"}
      text={`Ce projet se déroule sur le portfolio d'une photographe, sur lequel le maître mot a été l'optimisation du site. <br />
        En effet, au moment de la récupération des fichiers, le site prenait plusieurs secondes à charger, pour diverses raisons qu'il a
        fallut identifier et auxquelles il a fallut apporter des solutions. <br />
        Le gros du travail a été l'optimisation des images, ce qui n'est pas une grosse surprise pour un portfolio de photographe.
        Le changement de format vers le webp et la réduction de la résolution des images a été l'angle vers lequel je me suis dirigé, tout
        en notifiant qu'il pouvait être intéressant d'héberger les images HD à l'extérieur du site, pour permettre leur accès aux potentiels
        clients`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_1.png'} title={"Slider Principal du site, les images les plus lourdes se situaient ici"}/>
      <ProjectText 
      text={`Le travail sur l'optimisation ne s'est pas arrêté là, tout le système d'importation des fonts depuis google fonts a été réimplémenté pour ne charger que les
        fichiers nécessaires au site, et le chargement des différents scripts du site a été différé pour accélérer l'affichage du site à l'utilisateur`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_2.png'} title={"Slider Principal du site, les images les plus lourdes se situaient ici"}/>
      <ProjectText 
      title={'Accessibilité'}
      text={`La seconde partie du travail sur le portfolio portait sur l'accessibilité de celui-ci, qui a été mesurée au travers du rapport Lightouse et de l'extension
        Wave. Une grande partie du balisage html a été revue pour être plus cohérente (notamment sur l'ordre des balises de titres). <br />
        Certains éléments ne présentaient pas suffisament de contraste et ont dû être légèrement modifiés également.`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_3.png'} title={"Sections des services, qui a nécessité un travail de rebalisage"}/>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_4.png'} title={`Affichage des travaux de Nina Carducci, les boutons de tri ne comportaient
        à l'origine pas un contraste suffisament fort`}/>

      <div className='webProject__container webProject__container-row'>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_5.png'} title={"Rapport Lightouse, avant optimisation"}/>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_6.png'} title={"Rapport Lightouse, après optimisation"}/>
      </div>

      <ProjectText 
      title={'Référencement'}
      text={`Enfin, j'ai intégré au site des éléments permettant d'améliorer référencement à l'aide d'éléments de microdonnées principalement des données de référencement local.
        <br />
        J'ai également intégré des éléments permettant de générer des cards pour le lien du site, via OpenGraph ou Twitter Cards. Ces éléments rendent 
        l'utilisation du lien sur les réseaux sociaux plus sympathiques pour les potentiels utilisateurs`}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_8.png'} title={"Card générée par OpenGraph"}/>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/NinaCarducci/ninaCarducci_9.png'} title={"Card générée par Twitte Cards"}/>
    </section>  
  )
}
