import styled from "styled-components";

export const SelectInput = styled.div`
    flex: 1;

    select {
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;

        &:focus {
            outline: none;
            border-color: #666;
        }
    }
`;