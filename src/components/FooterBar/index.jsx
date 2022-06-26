import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../../icons/facebook.svg';
import instagram from '../../icons/instagram.svg';
import youtube from '../../icons/youtube.svg';
import { NavFooter, NavFooterIcons, Footer } from '../../styled';

export default function FooterBar() {
  return (
    <NavFooter>
        <NavFooterIcons>
            <Link to='/'><img src={facebook} alt="icone Facebook" /></Link>
            <Link to='/'><img src={instagram} alt="icone Instagra" /></Link>
            <Link to='/'><img src={youtube} alt="icone Youtube" /></Link>
        </NavFooterIcons>
        <Footer>
            <p>gamix@gmail.com</p>
        </Footer>
    </NavFooter>
  )
}

