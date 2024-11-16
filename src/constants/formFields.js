export const FORM_FIELDS = {
    common: [
        { name: 'username', type: 'text', label: '아이디' },
        { name: 'password', type: 'password', label: '비밀번호' },
        { name: 'confirmPassword', type: 'password',  label: '비밀번호 확인' },
        { name: 'email', type: 'email', label: '이메일' },
        { name: 'genderType', type: 'radio', label: '성별', options: ['남성', '여성'], component: 'radio'},
        { name: 'birthDate', type: 'date', label: '생년월일' },
        { name: 'region', type: 'select', component: 'regionSelect', label: '지역' }
    ],
    business: [
        { name: 'storeType', type: 'select', label: '가게 유형', options: ['식당', '술집', '카페', '베이커리', '디저트'], component: 'select'},
        { name: 'storeName', type: 'text', label: '가게 이름' },
        { name: 'storeAddress', type: 'text', label: '가게 주소' }
    ],
    influencer: [
        { name: 'snsType', type: 'select', label: 'SNS 유형', options: ['인스타그램', '블로그', '유튜브', '틱톡'], component: 'select'},
        { name: 'snsUrl', type: 'url', label: 'SNS 링크' },
        { name: 'followerCount', type: 'number', label: '팔로워 수' }
    ]
};

export const USER_TYPES = {
    business: { value: 'business', label: '소상공인', color: 'indianred' },
    influencer: { value: 'influencer', label: '인플루언서', color: 'dodgerblue' }
};