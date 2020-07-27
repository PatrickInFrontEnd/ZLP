import styled from "styled-components";
import { NavBtn } from "./../../layouts/Navigation/Nav.styles";
import { Colors } from "./../../utils/Colors.theme";

const Wrap = styled.div`
    width: 100%;
    color: ${Colors.white};
    padding-bottom: 20px;
`;

const MainContent = styled.section`
    min-height: 300px;
    margin: 0 auto;
    padding: 100px 30px 50px;
    background-color: ${Colors.bgColor};
    color: #1b9cfc;
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
`;

const Content = styled.section`
    min-height: 300px;
    width: 100%;
    text-align: center;
`;

const GamesSection = styled.section`
    width: 80%;
    min-height: 120px;
    margin: 0 auto;
    background-color: #0984e3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    border: 3px solid #0984e3;
    border-radius: 20px;
    box-shadow: 0 0 15px 2px #74b9ff;

    @media screen and (max-width: 880px) {
        width: 490px;
        max-width: 490px;
        min-height: 240px;
        flex-shrink: 0;
    }
    @media screen and (max-width: 620px) {
        width: 80%;
        flex-direction: column;
        flex-shrink: 0;
    }
`;

const GameIMG = styled.img`
    min-width: 100px;
    height: 120px;

    @media screen and (max-width: 620px) {
        max-width: 160px;
    }
`;

const TournamentDescription = styled.article`
    width: 80%;
    min-height: 400px;
    margin: 50px auto;
    padding: 10px 20px;
    text-align: justify;
    text-align-last: center;
    hyphens: auto;
    word-wrap: break-word;

    @media screen and (max-width: 750px) {
        width: 100%;
        padding: 0;
        margin: 20px auto;
    }
`;

const GoToRegistration = styled(NavBtn)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0;
    color: #fff;
    overflow: hidden;

    &::before,
    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        transition: 0.5s;
    }

    &::before {
        transform: translateX(-102%);
        top: 0;
    }
    &::after {
        transform: translateX(102%);
        bottom: 0;
    }

    &:hover::before,
    &:hover::after {
        transform: translateX(0);
    }

    @media screen and (max-width: 1175px) {
        font-size: 20px;
    }

    @media screen and (max-width: 990px) {
        text-align: center;
    }
`;

export {
    Wrap,
    MainContent,
    Content,
    GamesSection,
    GameIMG,
    TournamentDescription,
    GoToRegistration,
};
