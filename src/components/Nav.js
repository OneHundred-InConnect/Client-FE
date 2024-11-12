import React from 'react';
import {NavContainer, NavLink, NavLogin, NavLogo, NavMenu} from "../styles/common/NavStyles";

const Nav = () => {
    return (
        <NavContainer>
            <NavLogo>
                <NavLink to="/">로고</NavLink>
            </NavLogo>
            <NavMenu>
                <NavLink to="/service">서비스</NavLink>
                <NavLink to="/premium">프리미엄</NavLink>
            </NavMenu>
            <NavLogin>
                <NavLink to="/login" className="white">로그인</NavLink>
            </NavLogin>
        </NavContainer>
    );
}

export default Nav;