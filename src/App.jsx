import React, { useEffect } from 'react';
import MainRoutes from './routes';
import { Container } from './styled';
import WebFont from 'webfontloader';
import './reset.css';

console.log(window.screen.width)

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins']      
      } 
  })
  })
  return(
      <Container>
        <MainRoutes/>
      </Container>
      )
}
