import React from 'react';
import {Link} from 'react-router-dom';
import { MainNavigation } from '../../styled';
import home from '../../icons/home.svg';
import library from '../../icons/library.svg';
import friends from '../../icons/friends.svg';
import ranking from '../../icons/ranking.svg';
import car from '../../icons/car.svg';
import gift from '../../icons/gift.svg';
import settings from '../../icons/settings.svg';


export default function NavigationBar() {
  return (
    <MainNavigation>
        <ol>
            <li><span><img src={home} alt="icon home" /></span><Link to={''}>Inicio</Link></li>
            <li><span><img src={library} alt="icon library " /></span><Link to={''}>Biblioteca</Link></li>
            <li><span><img src={friends} alt="icon friends" /></span><Link to={''}>Amigos</Link></li>
            <li><span><img src={ranking} alt="icon ranking" /></span><Link to={''}>Ranking</Link></li>
            <li><span><img src={car} alt="icon car" /></span><Link to={''}>Carrinho</Link></li>
            <li><span><img src={gift} alt="icon gift" /></span><Link to={''}>Presentes</Link></li>
            <li><span><img src={settings} alt="icon settings" /></span><Link to={''}>Configurações</Link></li>
        </ol>
    </MainNavigation>
  )
}

