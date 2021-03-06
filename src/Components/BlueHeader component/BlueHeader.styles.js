import styled from "styled-components";
import { Colors } from "./../../utils/Colors.theme";

export const BlueHeader = styled.h1`
    width: 100%;
    line-height: 80px;
    padding: 20px 0;
    margin: 0 auto 50px;
    font-size: ${(props) => (props.isFZ ? "32px" : "46px")};
    font-weight: 700;
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    color: ${Colors.white};
    border-top: 4px solid #1b9cfc;
    border-bottom: 4px solid #1b9cfc;
    text-align: center;

    @media screen and (max-width: 1470px) {
        font-size: 36px;
        line-height: 60px;
    }
    @media screen and (max-width: 880px) {
        font-size: 28px;
        line-height: 60px;
    }
    @media screen and (max-width: 680px) {
        font-size: 24px;
        line-height: 40px;
    }
    @media screen and (max-width: 420px) {
        font-size: 22px;
        line-height: 40px;
    }
`;
