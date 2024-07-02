import React from 'react'

import PixelGrid from '../Containers/PixelGrid/PixelGrid'

export default function PixelArt() {
  return (
    <main>
      <section className='main'>
          <h1 className='main__title'>Pixel Art !</h1>
          <p className="main__text">On retrouve ici mon travail en tant que pixel artist !</p>
          <p className="main__text">Ce qui était autrefois une restriction technique est désormais un choix
            esthétique ! Souvent motivé par un peu de nostalgie. Dans mon cas, la direction vers le pixel art
            est peu à peu apparue comme une évidence à mesure que je me lançais vers des projets de jeu solo.
        </p>
        <p className="main__text">J'ai appris en autodidacte, notamment avec l'aide des très nombreuses ressources en ligne
          et de la bienveillance des communautés de pixel artists. Et puis à force de pratiquer, c'est ensuite devenu mon activité principale 
          pendant un peu plus d'un an en tant que freelance, pour des développeurs indépendants et des serveurs minecraft principalement.
        </p>
      </section>
      <section>
        <PixelGrid type={'static'} />
        <PixelGrid type={'anim'} />
      </section>
    </main>
  )
}
