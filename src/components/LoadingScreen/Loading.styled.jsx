import styled from "styled-components";


export const Grid = styled.div`
    height: 100%;
    display: grid;
    place-items: center
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

export const LoaderBox = styled.div`
    position: relative;
    display: grid;
    place-items: center;
`;

export const Title = styled.p`
    width: 200px;
    text-align: center;
`;

export const ProgeressSpan = styled.span`
    position: absolute;
    font-size: 52px;
    font-weight: 800;
`;
