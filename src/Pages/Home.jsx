import React from 'react'
import catou from '../Catou_Walk.gif'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <img src={catou} alt='le chat'/>
      <h2>Work in Progress</h2>
      <p>Bonjour et bienvenue ! Je suis Lylian et j'ai décidé il y a un an de me 
        reconvertir dans le développement web, avec un focus sur l'environnement front-end.
        Mon parcours m'a doté d'un profil touche-à-tout et très adaptable, allant du design à
        l'art, en passant évidemment par le code. <br/>
        Ce site me permet de montrer mon travail en tant que développeur front-end, tout en
        montrant également des éléments de mon travail passé qui définit mon profil.
      </p>
    </>
  )
}
