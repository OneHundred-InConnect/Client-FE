import styled from "styled-components";

export const CampaignContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 30px;
    padding: 20px;
`;

export const CampaignContent = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;

    gap: 10px;
    
    &:hover {
        opacity: 0.9;
    }
`;

export const CampaignImg = styled.div`
    width: 100%;
    height: 160px;
    border-radius: 10px;
    background: dodgerblue;
`;

export const CampaignSpan = styled.span`
    font-size: 16px;
    padding: 0 10px;
`;