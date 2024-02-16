import styled from "styled-components";

export const StyledMain = styled.main`
    padding: 45px 20px 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const QuestionArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const OptionsArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Option = styled.label`
    width: 100%;
    padding: 18px 20px;
    border-radius: 16px;
    background-color: var(--lightViolet);
    color: inherit;
    font-weight: 500;
    outline: 2px solid transparent;
    transition: all .2s linear;
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 23px;

    &:hover {
        background: var(--pinkTransparent);
    }

    &:has(input:checked) {
        outline: 2px solid var(--pink);
        background: var(--pinkTransparent);
    }

    &:has(input:checked) div.checkbox {
        background: var(--pink);
        
        svg {
            fill: white;
        }
    }
`;

export const Checkbox = styled.div`
    display: grid;
    place-items: center;
    width: 23px;
    height: 23px;
    background-color: #6D4376;
    border: 1px solid var(--pink);
    border-radius: 8px;
`;