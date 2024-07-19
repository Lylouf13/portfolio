import React from 'react'
import './etherProject.scss'

export default function EtherProject() {

  return (
    <article className='project'>
      <div>
        <div className="box"></div>
        <div className="green"></div>
        <div className="blue"></div>
      </div>
      <h1 className='project__title'>EtherProject</h1>
      <div className='horizontalContainer'>
        <img className='horizontalContainer__image' src="/Assets/Games/Ether/Ether3.webp" alt="truc"/>
        <p className='horizontalContainer__text'>
          Ether n'est pas un jeu à proprement parler, mais un jouet <br />
          Pas de condition de victoire à atteindre, simplement le plaisir de l'interaction
        </p>
      </div>
    </article>
  )
}
