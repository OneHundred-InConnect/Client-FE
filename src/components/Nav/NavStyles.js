import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavContainer = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    position: fixed;
    z-index: 1000;

    text-align: center;
    align-items: center;
    justify-content: space-evenly;

    background: rgba(255, 255, 255, 0.9);
    
    &.dark {
        background: #182127;
        justify-content: start;
    }
`

export const NavLink = styled(Link)`
    color: black;
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    align-items: center;

    &.color-white {
        color: white
    }
`

export const NavLogo = styled.div`
    min-width: 100px;
`;

export const NavMenu = styled.div`
    width: 60%;
    min-width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const NavButton = styled.div`
    min-width: 110px;
    height: 70%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: dodgerblue;
    border-radius: 10px;
`;