import React from 'react';
import {NavContainer, NavLink, NavLogo,} from "../styles/common/NavStyles";

const Top = () => {
    return (
        <NavContainer className="dark">
            <NavLogo>
                <NavLink to="/" className="white">로고</NavLink>
            </NavLogo>
        </NavContainer>
    );
}

export default Top;