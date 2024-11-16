import styled from "styled-components";

export const Input = styled.input`
    width: 400px;
    height: 50px;
    padding: 0 15px;
    border: 1px solid lightgrey;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        border-color: dodgerblue;
        outline: none;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`;

export const ErrorText = styled.span`
    color: indianred;
    font-size: 12px;
    padding-left: 4px;
    line-height: 0.3; 
`;

export const RequiredInput = styled(Input)`
    border-color: ${({ $isError }) => ($isError ? "red" : "lightgrey")};
`;