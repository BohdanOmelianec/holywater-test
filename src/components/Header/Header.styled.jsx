import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 96px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-end;
`;

export const Counter = styled.div`
    color: var(--barWhite);
    font-weight: 800;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Numbers = styled.div`
    flex-grow: 1;
    text-align: center;

    & span.accent {
        color: var(--pink);
        margin-right: 2px;
    }
`;

export const ArrowBox = styled.div`
    padding: 4px 8px;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    left: 0;
    transition: all .25s linear;

    &:hover {
        transform: scale(1.2);
    }
`;

export const Arrow = styled.img`
    width: 13px;
    height: 13px;
`;

export const Progress = styled.div`
    width: ${props => props.$width || "100%"};
    height: 4px;
    position: relative;
    background-color:  ${props => props.$bg || "var(--barWhite)"};
    border-radius: 10px;    
`;