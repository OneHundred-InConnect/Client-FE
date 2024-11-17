import {Container} from "../../../styles/common/FrameStyles";
import styled from "styled-components";
import {useState} from "react";

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

const CampaignPage = () => {
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

export default CampaignPage;

const CampaignContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 30px;
    padding: 20px;
`;

const CampaignContent = styled.div`
    width: 300px;
    height: 200px;
    background: #ececec;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const CampaignImg = styled.div`
    width: 100%;
    height: 160px;
    border-radius: 10px;
    background: dodgerblue;
`;

const CampaignSpan = styled.span`
    font-size: 16px;
    padding: 0 10px;
`;