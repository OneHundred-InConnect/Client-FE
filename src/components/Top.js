import React from 'react';
import {NavContainer, NavLink, NavLogo,} from "../styles/common/NavStyles";

const Top = () => {
    return (
        <NavContainer>
            <NavLogo>
                <NavLink to="/">로고</NavLink>
            </NavLogo>
        </NavContainer>
    );
}

export default Top;