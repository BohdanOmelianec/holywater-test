import styled from "styled-components";


export const Grid = styled.div`
    display: grid;
    grid-template-rows: 596px 96px;
    align-items: center;
`;

export const StyledMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 56px;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const InputBox = styled.div`
    position: relative;
    
    div {
        position: absolute;
        margin: 8px 16px 0;
        font-size: 14px;
        color: red;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 26px 20px;
    border-radius: 16px;
    background-color: var(--lightViolet);
    color: inherit;
    font-weight: 500;
    font-size: 17px;

    &:focus {
        outline: 1px solid var(--pink);
    }
`;