import {React} from 'react'

import '../webProjects.scss'

import ProjectImage from '../../../../Components/ProjectImage/ProjectImage'
import ProjectText from '../../../../Components/ProjectText/ProjectText'
import ProjectSkills from '../../../../Components/ProjectSkills/ProjectSkills'
import ProjectTechs from '../../../../Components/ProjectTechs/ProjectTechs'
import CtaButton from '../../../../Components/CTA/CtaButton'



export default function Booki() {

  return (
    <section className='webProject'>
      <h1 className='webProject__title'>Booki</h1>
      <ProjectTechs technos={["html", "css"]}/>
      <CtaButton title={"Projet Github"} link={"https://github.com/Lylouf13/OC_3"} icon={"outerLink"}/>
      <ProjectSkills title='Compétences associées' skills={["HTML", "CSS", "Intégration à partir d'une maquette"]}/>
      <ProjectText 
        title ='Intégration'
        text=
          {`Booki a été le premier projet de ma formation OpenClassrooms,
          et donc mon premier exercice d'intégration HTML/CSS. Il s'agit d'un site One Page pour une agence de location. <br />
          Le site est découpé en 4 grandes parties, Header/footer, Barre de recherche, Hébergements et Activités.
          J'avais à ma disposition un figma contenant les différents éléments du site à intégrer ainsi qu'une
          petite base de code concernant les cards utilisées dans la section Hébergements du site. 
          `}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_1.webp'} title={"La section recherche du site, avec un input utilisateur et des éléments de filtrage"}/>
      <ProjectText 
        text=
          {`Booki a majoritairement été constitué de tests d'utilisation de flexbox, qui permet de créer la majorité éléments intégrés.
            La searchbar s'est révélée être l'élément le plus technique à intégrer pour obtenir le rendu seamless entre les différents éléments.
          `}
      />
      <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_2.webp'} title={"La section hébergements du site, un découpage en cards des différents locations"}/>
      <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_3.webp'} title={"Les cards d'activité du site, emphase mise sur les images des activités"}/>
      <ProjectText 
        text=
          {`Les sections Hébergements et Activités utilisent une base de code similaire pour les cards, avec une emphase mise respectivement sur
            les informations et logements et sur les visuels associés. Au cours de l'intégration, j'avais rajouté un effet hover sur les cards
            d'activités pour apporter un peu de dynamisme au projet.
          `}
      />
      
      <ProjectText 
        title={'Responsive | Tablette'}
        text=
          {`La dernière partie de ce projet a été l'intégration de media queries pour permettre un affichage adapté sur les supports tablettes puis mobile.
            La version tablette reste très proche du desktop, mis à part quelques changements de taille d'éléments, la modification la plus visible est le
            passage en colonne des deux parties de la section Hébergements.
          `}
      />
            <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_5.webp'} title={"Intégration responsive tablette des hébergements"}/>

      <ProjectText 
        title={'Responsive | Mobile'}
        text=
          {`La version mobile quant à elle est intégralement modifiée en colonne pour s'adapter à l'usage mobile. Les sections "Hébergements" et "Les plus
            populaires" y sont inversées et les cards Hébergement mettent un peu plus l'emphase sur l'image. La partie recherche quant à elle est remaniée,
            le bouton de recherche de la searchbar est remplacé par un autre avec une icone, et l'affichage des filtre est modifié.
          `}
      />
      <div className='webProject__container webProject__container-row'>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_6.webp'} title={"Responsive mobile de la recherche"}/>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_7.webp'} title={"Responsive mobile des plus populaires"}/>
        <ProjectImage image={'/Portfolio/Assets/Images/Web/Booki/booki_8.webp'} title={"Responsive mobile des hébergements"}/>
      </div>
      <ProjectText 
        text=
          {`Ce projet a été une excellente introduction à de nombreux concepts d'intégration. L'absence de gestion de base de données
            ou de lien avec des data sous un quelconque format a permi de se concentrer sur la CSS et les logiques de boites du HTML. 
          `}
      />
    </section>
  )
}
