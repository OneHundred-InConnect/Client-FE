import styled from "styled-components";

export const Input = styled.input`
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
    width: 100%;
`;

export const ErrorText = styled.span`
    color: red;
    font-size: 12px;
    padding-left: 4px;
    line-height: 0.3;  // 줄 간격을 줄여서 더 붙어보이게 함
`;

export const RequiredInput = styled(Input)`
    border-color: ${({ $isError }) => ($isError ? "red" : "lightgrey")};
`;