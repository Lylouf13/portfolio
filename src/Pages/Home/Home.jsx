import React from 'react'

import CtaButton from '../../Components/CTA/CtaButton'
import ProjectText from '../../Components/ProjectText/ProjectText'
import ProjectTechs from '../../Components/ProjectTechs/ProjectTechs'
import ProjectSkills from '../../Components/ProjectSkills/ProjectSkills'

export default function Home() {
  return (
    <section className='main'>
        <h1 className='main__title'>Home</h1>
        <ProjectText 
          text={`Bonjour et bienvenue ! Je suis Lylian Leutard et j'ai décidé il y a un peu plus d'un an de me 
          reconvertir dans le développement front-end ! Après avoir apris quelques bases d'HTML / CSS / Javascript par moi-même,
          j'ai décidé de suivre une formation OpenClassrooms afin d'approfondir et structurer ces connaissances`} 
          />

        <ProjectText 
          title={'Développement front-end'}
          text={`Ce portfolio me permet de présenter tous mes travaux réalisés en développement front-end, princpalement
          dans le cadre de ma formation. Si le travail présenté est le coeur du site, le portfolio fait un peu partie de lui-même et fait
          une synthèse de mes compétences d'intégration. <br />
          Durant ma formation j'ai pu toucher à plusieurs technologies, allant des fonctionnements de base du duo HTML / CSS en passant par
          l'intégration de dynamisme via Javascript. <br />
          Les derniers projets ont principalement tourné autour du framework React, qui est à l'heure actuelle la méthodologie
          sur laquelle j'ai le plus d'expérience d'intégration`} 
          />
        <CtaButton title='Web' link='/Portfolio/web#top'/>
        <ProjectTechs technos={['html', 'css', 'js', 'sass', 'react']}/>

        <ProjectText 
          title={'Une section plus personnelle'}
          text={`Mon parcours m'a amené à étudier le game design et à travailler en tant que pixel
          artist en freelance, ces expériences ont été déterminantes dans ma construction personnelle, et m'ont apporté un profil touche-à-tout et très adaptable, 
          allant du design à l'art, en passant évidemment par le développement, sous plusieurs formes.<br />
          J'y ai également eu l'occasion de communiquer avec des corps de métier très différents les uns des autres, développant ainsi
          ma capacité à écouter et communiquer autour des besoins très différents de chacun dans une production. <br />
          Ces expériences font partie intégrante de mon profil, et expliquent mon intérêt particulier pour les éléments
          intéractifs et l'UX en général, qu'il s'agisse de simples boutons, d'animations, ou de quoi que ce soit auquel l'utilisateur peut être confronté, et qui
          peut venir enrichir et/ou guider son expérience`} 
          />
          <div className='main__container'>
            <CtaButton title='Games' link='/Portfolio/games#top'/>
            <CtaButton title='Pixel Art' link='/Portfolio/pixelArt#top'/>
          </div>

          <ProjectSkills 
            title={'Mes Contacts'}
            skills={['MAIL : lylian.leutard@gmail.com','TEL : 0652581805']} 
          />
    </section>
  )
}
