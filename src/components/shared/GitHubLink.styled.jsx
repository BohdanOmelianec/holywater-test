import styled, { keyframes } from "styled-components";


const tilt = keyframes`
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(4px, 4px) rotate(4deg); }
    50% { transform: translate(0, 0) rotate(0eg); }
    75% { transform: translate(-4px, 4px) rotate(-4deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
`;

export const GitHubLink = styled.a`
    background-image: var(--gradient);
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    position: absolute;
    top: 30px;
    left: 30px;
    font-size: 30px;
    font-weight: 800;
    cursor: pointer;
    transition: all .2s linear;
    animation: ${tilt} .4s linear 3s;
    animation-iteration-count: 3;
`;

