import {PATH} from "./path";

export const NAVIGATION_CONFIG = {
    business: [
        { path: PATH.CAMPAIGN.HOME, label: '캠페인', type: 'menu' },
        { path: PATH.BUSINESS.PREMIUM, label: '프리미엄', type: 'menu' },
        { path: PATH.BUSINESS.WORK, label: '업무', type: 'menu' },
        { path: 'myPage', label: 'user 님', type: 'user' }
    ],
    influencer: [
        { path: PATH.INFLUENCER.SERVICE, label: '서비스', type: 'menu' },
        { path: PATH.INFLUENCER.CAMPAIGN, label: '캠페인', type: 'menu' },
        { path: PATH.INFLUENCER.PREMIUM, label: '프리미엄', type: 'menu' },
        { path: 'myPage', label: 'user 님', type: 'user' }
    ],
    landing: [
        { path: PATH.LANDING_SERVICE, label: '서비스', type: 'menu' },
        { path: PATH.LANDING_PREMIUM, label: '프리미엄', type: 'menu' },
        { path: PATH.LOGIN, label: '로그인', type: 'login' }
    ],
};

export const SUB_NAVIGATION_CONFIG = {
    business: {
        campaign: [
            {path: "", label: "캠페인 등록"},
            {path: "", label: "내 캠페인 관리"}
        ],
        premium: [
            {path: "", label: "준비중"},
            {path: "", label: "준비중"},
        ],
        work: [
            {path: "", label: "준비중"},
            {path: "", label: "준비중"},
        ]
    },
}
