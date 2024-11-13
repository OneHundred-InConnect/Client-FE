import styled from "styled-components";
import {Link} from "react-router-dom";

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

export const LinkDefault = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: white;
    
    &.black {
        color: black;
    }
`