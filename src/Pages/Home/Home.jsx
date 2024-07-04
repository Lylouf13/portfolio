import React from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

import CtaButton from '../../Components/CTA/CtaButton'

export default function Home() {
  return (
    <section className='main'>
        <h1 className='main__title'>Home</h1>
        <p className="main__text">
          Bonjour et bienvenue ! Je suis Lylian et j'ai décidé il y a un an de me 
          reconvertir dans le développement front-end.
        </p>
        <p className="main__text">
          Les premières étapes de mon parcours dans le domaine du jeu vidéo m'ont doté d'un profil touche-à-tout et très adaptable, 
          allant du design à l'art, en passant évidemment par le développement, sous plusieurs formes.
        </p>
        <p className="main__text">
          J'y ai également eu l'occasion de communiquer avec des corps de métier très différents les uns des autres, développant ainsi
          ma capacité à écouter et communiquer autour des besoins très différents de chacun dans une production
        </p>
      <h2 className='home__container__subtitle'>Web dev</h2>
      <div className="home__container">
        <p className="home__container__text">Ce portfolio me permet de présenter tous mes travaux réalisés en développement front-end, princpalement
          dans le cadre de ma formation OpenClassrooms. Si le travail présenté est le coeur du site, le portfolio fait un peu partie de lui-même et fait
          la synthèse de mes compétences d'intégration 
        </p>
        <Link className="home__container__cta" to="/web">Web !</Link>
      </div>
      <h2 className='home__container__subtitle home__container__subtitle-right'>Autres aventures</h2>
      <div className="home__container home__container-right">
        <p className="home__container__text">Mon parcours m'a amené à étudier le game design et à travailler en tant que pixel
          artist en freelance, ces expériences ont été déterminantes dans ma construction personnelle, et c'est avec fierté que
          je continue de les afficher dans mon portfolio (et que j'en profite pour faire des tests d'intégration)
        </p>
        <div className="home__container home__container-column">
          <Link className="home__container__cta" to="/games">Games</Link>
          <Link className="home__container__cta" to="/pixelart">Pixel Art</Link>
        </div>
        <CtaButton title='Testerino'></CtaButton>
      </div>
    </section>
  )
}
