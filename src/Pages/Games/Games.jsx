import {React, useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import GameProjectSlider from '../../Containers/GameProjectSlider/GameProjectSlider'

export default function Games() {

  const location = useLocation()

useEffect(() => {
    const element = document.getElementById(location.hash)
    if (element) {
      element.scrollIntoView(true);
    } 
})

  return (
    <main>
      <section className='main'>
        <h1 className='main__title'>Games</h1>
        <p className='main__text'>Si on demande au moi d'il y a 10 ans ce qu'il veut faire de sa vie,
          il répondra probablement "des jeux vidéos !"
        </p>
      </section>
      <nav>
        <GameProjectSlider/>
      </nav>
      <section id="#project">
        <Outlet />
      </section>
    </main>
  )
}
