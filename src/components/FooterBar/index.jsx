import React from 'react'
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import youtube from '../../icons/youtube.svg';

export default function FooterBar() {
  return (
    <div>
        <div>
            <img src={facebook} alt="icone Facebook" />
            <img src={instagram} alt="icone Instagra" />
            <img src={youtube} alt="icone Youtube" />
        </div>
        <div>
            <p>gamix@gmail.com</p>
        </div>
    </div>
  )
}

