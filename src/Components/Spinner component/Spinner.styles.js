import styled from "styled-components";
import { Colors } from "../../utils/Colors.theme";

const Wrapper = styled.div`
    font-family: "Montserrat", "Arial", "Sans-Serif";
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.bgColor};
    z-index: 1000;
`;

const LoaderContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    padding: 5px;
    border-radius: 50%;
    border: 8px solid ${Colors.footer};
    background-color: #000;
    z-index: 2;
    animation: loading 5s infinite forwards;

    @keyframes loading {
        to {
            transform: rotate(360deg);
        }
    }
`;

const LoaderItem = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    border: 5px solid transparent;
    border-top: 5px solid ${Colors.blue_nav};
    border-right: 5px solid ${Colors.blue_nav};
    border-radius: 50%;
    animation: loading 8s infinite forwards;

    @keyframes loading {
        to {
            transform: rotate(360deg);
        }
    }
`;

const TextWrapper = styled.h1`
    display: flex;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 4px;
    color: ${Colors.white};
    font-weight: bold;
    font-size: 36px;
`;

const LoaderText = styled.span`
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: bounce;
    margin: 0 5px;

    ${({ delayId }) =>
        delayId ? `animation-delay: calc(0.08s * ${delayId});` : ""}

    @keyframes bounce {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-15px);
        }

        80% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(0);
        }
    }

    @media screen and (max-width: 500px) {
        margin: 0;
    }
`;

export { Wrapper, LoaderContent, LoaderItem, TextWrapper, LoaderText };
