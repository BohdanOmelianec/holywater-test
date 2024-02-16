import styled from "styled-components";
import { Question } from "../shared/Question.styled";


export const Grid = styled.div`
    display: grid;
    grid-template-rows: 554px 42px 96px;
    align-items: center;
`;

export const StyledMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 56px;
`;

export const TitleArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const Title = styled(Question)`
    font-size: 36px;
    font-family: "Niconne";
    font-weight: 400;
`;

export const Icon = styled.img`
    width: 118px;
    height: 118px;
    margin-inline: auto;
`;

export const Download = styled.button`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-inline: auto;
    cursor: pointer;
    font-size: 17px;
    font-weight: 600;
    background: none;

    img {
        width: 42px;
        height: 42px;
    }
`;
