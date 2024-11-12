import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    
    &.column {
        flex-direction: column;
    }
`

export const ContentContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;   
`;

export const PageTitle = styled.h1`
    text-align: center;
    padding: 50px 0 30px; 
`
