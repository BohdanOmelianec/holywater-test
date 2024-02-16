import styled from "styled-components";

export const Button = styled.button`
    width: 335px;
    height: 56px;
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: var(--pink);
    padding: 16px;
    margin: 20px auto;
    color: var(--textPrimary);
    text-align: center;
    font-weight: 800;
    cursor: pointer;
    transition: all .2s linear;

    &:hover {
        background: #93075f;
    }
    &:disabled {
        background: #93075f;
    }
`;