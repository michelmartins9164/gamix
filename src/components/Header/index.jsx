import React from "react";
import NavBar from '../NavBar';
import background from '../../assets/background.svg';
import { ContainerHeader, Background} from "../../styled";
export default function Header() {
    return(
        <ContainerHeader className="header">
            <Background>
                <img src={background} alt="" />
            </Background>
            <NavBar/>
        </ContainerHeader>
    )
}