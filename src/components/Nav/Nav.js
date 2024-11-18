import React from 'react';
import {NavContainer, NavLink, NavButton, NavLogo, NavMenu, NavUser} from "./NavStyles";

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