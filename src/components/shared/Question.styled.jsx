import styled from "styled-components";

export const Question = styled.h2`
    color: var(--textPrimary);
    font-weight: 800;
    font-size: 30px;
    text-align: center;
`;

export const QuestionDescription = styled.p`
    color: var(--textSecondary);
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    ${props => props.sx};
`;

export const AccentWord = styled.span`
    color: var(--pink);
`;