import {Container} from "../../styles/common/FrameStyles";
import {useState} from "react";
import {
    CampaignContainer,
    CampaignContent,
    CampaignImg,
    CampaignSpan
} from "../../components/Campaign/CampaignContent";


const test = [
    { img: '', title: '브랜드 마케팅 캠페인'},
    { img: '', title: '신제품 홍보 캠페인'},
    { img: '', title: '인플루언서 리뷰 캠페인'},
    { img: '', title: '바이럴 마케팅 캠페인'},
    { img: '', title: '시즌 이벤트 캠페인'},
    { img: '', title: '브랜드 인지도 캠페인'},
    { img: '', title: '제품 체험단 캠페인'},
    { img: '', title: '콘텐츠 제작 캠페인'},
    { img: '', title: '라이브 커머스 캠페인'},
];

const Campaign = ({test}) => {
    return (
        <CampaignContent>
            <CampaignImg/>
            <CampaignSpan>{test.title}</CampaignSpan>
        </CampaignContent>
    );
}

const BusinessCampaignPage = () => {
    const [contents, setContents] = useState(test);

    return (
        <Container>
            <CampaignContainer>
                {contents.map(content => (
                    <Campaign test={content} key={content.title}/>
                ))}
            </CampaignContainer>
        </Container>
    );
}

export default BusinessCampaignPage;