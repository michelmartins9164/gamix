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
        height:450px;
    }
    `;

export const Background = styled.div`
    width: 100%;
    img {
        overflow: hidden;
        left: 50%;
        top: 50%;
        transform: translate(-40%, -46%);
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