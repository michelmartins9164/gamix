import React from "react";
import NavBar from '../NavBar';
import CardGame from "../CardGame";
import background from '../../assets/background.svg';
import { ContainerHeader, Background, ContainerCardMain} from "../../styled";
import CardMain from "../CardMain";
export default function Header() {
    return(
        <ContainerHeader className="header">
            <NavBar/>
            <CardGame/>
            <Background>
                <img src={background} alt="" />
                <CardMain/>
            </Background>
        </ContainerHeader>
    )
}