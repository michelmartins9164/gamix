import React from 'react'
import FooterBar from '../FooterBar'
import NavigationBar from '../NavigationBar'
import Logo from '../../icons/GamIX.svg'
import { BarNav, LogoGamix } from '../../styled'

export default function NavBar() {
  return (
    <BarNav>
        <LogoGamix>
            <img src={Logo} alt="Logo GamIX" />
        </LogoGamix>
        <NavigationBar/>
        <FooterBar/>
    </BarNav>
  )
}