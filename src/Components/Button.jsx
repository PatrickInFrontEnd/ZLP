import styled from "styled-components";
import { Colors } from "./Colors";

export const Button = styled.a`
    position: relative;
    color: ${Colors.white};
    background-color: transparent;
    font-size: 20px;
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    text-align: center;
    line-height: 60px;
    font-weight: 700;
    letter-spacing: 2px;
    padding: 0 30px;
    border: 2px solid ${Colors.blue_text};
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    overflow: hidden;
    z-index: 5;

    &:hover {
        border: 2px solid;
        background-color: transparent;
        color: ${Colors.blue_text};
        box-shadow: 0 0 10px 1px ${Colors.blue_text};
    }
`;
