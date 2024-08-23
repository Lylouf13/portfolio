import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import CtaButton from '../CTA/CtaButton'
import './footer.scss'


export default function Footer() {
  const location = useLocation()
  return (
    <div className='footer'>
      <h2 className='footer__title'>Restons en contact !</h2>
        <ul className='footer__list'>
            <li className='footer__list__item'>
              <img className='footer__list__icon'src={`/portfolio/Assets/Images/Misc/Icons/icon_phone.png`} alt='icon'/>
              06 52 58 18 05
            </li>
            <li className='footer__list__item'>
              <img className='footer__list__icon'src={`/portfolio/Assets/Images/Misc/Icons/icon_mail.png`} alt='icon'/>
              lylian.leutard@gmail.com
            </li>
        </ul>
        <div className='flex-row'>
          <Link to="https://www.linkedin.com/in/leutard/" target="_blank" rel='noopener noreferrer'>
            <img className='footer__linkIcon' src={`/portfolio/Assets/Images/Misc/Icons/icon_linkedin.png`}alt="mon logo" />
          </Link>
          <Link to="https://github.com/Lylouf13" target="_blank" rel='noopener noreferrer'>
            <img className='footer__linkIcon' src={`/portfolio/Assets/Images/Misc/Icons/icon_github.png`} alt="mon logo" />
          </Link>
        </div>
        <CtaButton title='Retour en haut' link={`${location.pathname}#top`}outline/>
    </div>
  )
}
