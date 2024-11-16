import styled from "styled-components";

export const RadioGroup = styled.div`
    display: flex;
    gap: 20px;
    flex: 1;
`;

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    background: #f5f5f5;
    border-radius: 100px;
    padding: 8px 16px;

    &:hover {
        background: #ebebeb;
    }
`;