import { Outlet, useLocation } from 'react-router-dom';
import Nav from "./Nav/Nav";
import { Container } from "../styles/common/FrameStyles";
import { PATH } from "../constants/path";

const NAVIGATION_CONFIG = {
    business: [
        { path: PATH.BUSINESS_CAMPAIGN, label: '캠페인', type: 'menu' },
        { path: PATH.BUSINESS_PREMIUM, label: '프리미엄', type: 'menu' },
        { path: PATH.BUSINESS_WORK, label: '업무', type: 'menu' },
        { path: 'myPage', label: '마이페이지', type: 'button' }
    ],
    influencer: [
        { path: PATH.INFLUENCER_SERVICE, label: '서비스', type: 'menu' },
        { path: PATH.INFLUENCER_CAMPAIGN, label: '캠페인', type: 'menu' },
        { path: PATH.INFLUENCER_PREMIUM, label: '프리미엄', type: 'menu' },
        { path: 'myPage', label: '마이페이지', type: 'button' }
    ],
    landing: [
        { path: PATH.LANDING_SERVICE, label: '서비스', type: 'menu' },
        { path: PATH.LANDING_PREMIUM, label: '프리미엄', type: 'menu' },
        { path: PATH.LOGIN, label: '로그인', type: 'button' }
    ]
};

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