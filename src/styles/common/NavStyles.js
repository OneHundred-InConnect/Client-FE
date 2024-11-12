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

    &.white {
        color: white
    }
`

export const NavLogo = styled.div`
    width: 10%;
`;

export const NavMenu = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const NavLogin = styled.div`
    width: 10%;
    height: 70%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: dodgerblue;
    border-radius: 10px;
`;