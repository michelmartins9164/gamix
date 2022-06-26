import styled from "styled-components";
import gradient from './assets/gradient.svg';

export const Container = styled.div`
background-color: #000;
font-family: 'Poppins', sans-serif;
`;

export const ContainerHeader = styled.header`
    height: 100vh;
    
    ::after {
        content: url(${gradient});
        display: flex;
        position: fixed;
        top: 0;
        right: 335px;
        width: 210px;
        height:100vh;
    }
    `;

export const Background = styled.div`
    width: 100%;
    img {
        overflow: hidden;
        left: 50%;
        top: 50%;
        transform: translate(-40%, -48%);
        position: fixed;
        width: 65%;
    }
`;

export const BarNav = styled.nav`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
top: 0;
left: 0;
background-color: #101214;
    width: calc(100% - 80%);
    z-index: 1;
    height: 100vh;
    
    ::before {
        content: url(${gradient});
        display: flex;
        position: fixed;
        top: 0;
        left: 510px;
        width: 210px;
        height: 100vh;
        transform: rotateZ(180deg);
    }
    `;

    export const LogoGamix = styled.div `
        margin-top: 20px;
    `;

export const MainNavigation = styled.div `
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    ol {
        flex-direction: column;
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;

        li {
            padding-left: 55px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            text-align: center;
            width: 100%;
            margin-bottom: 15px;
            overflow: hidden;

            &:first-child {
                margin-top: 15px;
            }
            
            &:hover {
                background-color: #441569;
            }
        }
        
        a {
            padding: 15px 0px;
            font-family: 'Poppins';
            font-weight: 400;
            margin-left: 20px;
            font-size: 1.2em;
            color: #fff;
            text-decoration: none;
        }
    }
`;

export const NavFooter = styled.div `
    background-color: #1F2324;
    width: calc(100% - 80%);
    height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavFooterIcons = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -30px;
    box-sizing: border-box;
    img {
        margin-left: 30px;
    }
`;

export const Footer = styled.footer `
    padding-top: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #c4c4c4;
`;

export const ContainerBanner = styled.footer `
    position: fixed;
    left: 380px;
    top: 100px;
    z-index: 2;
    color: #fff;
    display: flex;
    column-gap: 60%;
    justify-content: space-between;
    
    @media screen and (min-width: 1500px){
        column-gap:110%;
    }
`;

export const ContainerButtons = styled.div `
    display: flex;
    column-gap: 1em;
    align-items: center;
    justify-content: center;
`;

export const CardPrice = styled.div `
    display: flex;
    width: 7em;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5px;
    justify-content: space-between;
    font-size: 1.4em;

    & p:nth-child(2) {
        color: #58575B;
        text-decoration: line-through;
    }
    `;

const configButtons = `
    width: 10.3em;
    height: 2em;
    font-size: 1.2em;
    border: none;
    color: #fff;
`;

export const ButtonBuy = styled.button `
    ${configButtons};  
    background-color: #4A2169;
    border-radius: 2px;
    `;

export const InfoMore = styled.button `
    ${configButtons};
    background-color: #090B0C70;
`; 

export const Hour = styled.h1 `
    font-size: 2em;
`;

export const ContainerCardMain = styled.div `
    position: fixed;
    top: 23em;
    left: 24em;
    color: #000;
    background-color: #fff;
    z-index: 2;
`;