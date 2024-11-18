import { Outlet, useLocation } from 'react-router-dom';
import Nav from "./Nav/Nav";
import { Container } from "../styles/common/FrameStyles";
import { NAVIGATION_CONFIG } from "../constants/nav";

const Layout = () => {
    const { pathname } = useLocation();

    const getNavItems = () => {
        if (pathname.startsWith('/business')) return NAVIGATION_CONFIG.business;
        if (pathname.startsWith('/influencer')) return NAVIGATION_CONFIG.influencer;
        return NAVIGATION_CONFIG.landing;
    };

    return (
        <>
            <Nav items={getNavItems()} />
            <Container>
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;