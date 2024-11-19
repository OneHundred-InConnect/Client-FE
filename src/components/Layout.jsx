import { Outlet} from 'react-router-dom';
import Nav from "./Nav/Nav";
import { Container } from "../styles/common/FrameStyles";
import { NAVIGATION_CONFIG } from "../constants/nav";

const Layout = () => {
    const userType = 'business';

    const getNavItems = () => {
        if (userType==='business') return NAVIGATION_CONFIG.business;
        else if (userType==='influencer') return NAVIGATION_CONFIG.influencer;
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