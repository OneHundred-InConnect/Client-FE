import React from 'react';
import {NavContainer, NavLink, NavButton, NavLogo, NavMenu} from "./NavStyles";

const Nav = ({items = []}) => {
    const menuItems = items.filter(item => item.type === 'menu');
    const buttonItem = items.find(item => item.type === 'button');

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
            {buttonItem && (
                <NavButton>
                    <NavLink to={buttonItem.path} className="color-white">
                        {buttonItem.label}
                    </NavLink>
                </NavButton>
            )}
        </NavContainer>
    );
}

export default Nav;