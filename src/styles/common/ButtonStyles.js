import styled from "styled-components";

export const Button1 = styled.button`
    width: 120px;
    height: 35px;
    
    color: gray;
    background: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    
    font-size: 15px;
    font-weight: bold;
`;

export const SubmitBtn = styled.button`
    height: 50px;

    font-size: 16px;
    font-weight: bold;
    color: white;
    background: dodgerblue;
    border: none;
    border-radius: 5px;
    
    &:hover {
        cursor: pointer;
    }
`;