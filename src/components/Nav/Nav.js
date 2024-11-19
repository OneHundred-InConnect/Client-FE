import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav = ({items}) => {
    const menuItems = items.filter(item => item.type === 'menu');
    const loginItem = items.find(item => item.type === 'login');
    const userItem = items.find(item => item.type === 'user');

    return (
        <NavContainer>
            <NavLogo>
                <NavLink to="/">로고</NavLink>
            </NavLogo>
            <NavMenu>
                {menuItems.map(item => (
                    <NavLink key={item.path} to={item.path}>
                        {item.label}
                    </NavLink>
                ))}
            </NavMenu>
            {loginItem && (
                <NavButton>
                    <NavLink to={loginItem.path} className="color-white">
                        {loginItem.label}
                    </NavLink>
                </NavButton>
            )}
            {userItem && (
                <NavUser>
                    <NavLink to={userItem.path}>{userItem.label}</NavLink>
                </NavUser>
            )}
        </NavContainer>
    );
}

export default Nav;

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
    height: 40px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: dodgerblue;
    border-radius: 5px;
`;

export const NavUser = styled.div`
    :nth-child(n) {
        font-weight: normal;
    }
`
