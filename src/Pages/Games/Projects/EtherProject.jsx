import React from 'react'
import './etherProject.scss'

import { gsap } from 'gsap/gsap-core'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";




export default function EtherProject() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(()=>{
    gsap.fromTo(".blue", {x: -100},{rotation: 1400, x: 1750,y: 350, duration: 15});
    })
  return (
    <article className='project'>
      <div>
        <div className="box"></div>
        <div className="green"></div>
        <div className="blue"></div>
      </div>
      <h1 className='project__title'>EtherProject</h1>
      <p>
        Ether n'est pas un jeu à proprement parler, mais un jouet <br />
        Pas de condition de victoire à atteindre, simplement le plaisir de l'interaction
      </p>
      <img className='project__image' src="/Assets/Games/Ether/Ether3.png" alt="truc"/>
    </article>
  )
}
