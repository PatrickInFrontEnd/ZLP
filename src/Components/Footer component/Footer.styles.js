import styled from "styled-components";
import { NavBtn } from "./../../layouts/Navigation/Nav.styles";
import { Colors } from "./../../utils/Colors.theme";

const Wrapper = styled.footer`
    width: 100%;
    min-height: 250px;
    background-color: ${Colors.footer};
    color: ${Colors.footer_text};
    font-family: Nunito, Montserrat, sans-serif;
    border-top: 2px solid ${Colors.blue_text};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column-reverse;
    }
`;

const DescriptionSection = styled.section`
    width: 65%;
    height: 250px;
    padding: 45px 30px 15px;
    border-right: 2px solid ${Colors.blue_text};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 1240px) {
        height: 290px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        border: none;
        border-top: 2px solid ${Colors.blue_text};
    }
`;

const Description = styled.h2`
    font-size: 28px;

    @media screen and (max-width: 800px) {
        text-align: justify;
    }

    @media screen and (max-width: 450px) {
        font-size: 22px;
    }

    @media screen and (max-width: 370px) {
        font-size: 20px;
    }
`;

const ExecutorParagraph = styled.p`
    font-size: 20px;
`;

const SchoolSection = styled.section`
    width: 35%;
    height: 250px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 1240px) {
        height: 270px;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 20px 0 0;
    }
`;

const LogoWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`;

const Logo = styled.img`
    width: 200px;
    height: 80px;
    display: block;

    @media screen and (max-width: 900px) {
        width: 300px;
        height: 100px;
    }

    @media screen and (max-width: 600px) {
        width: 200px;
        height: 80px;
        flex-direction: row;
    }
`;

const SchoolButton = styled(NavBtn)`
    width: 190px;
    height: 50px;
    background-color: #000;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1240px) {
        margin: 20px 0;
    }

    @media screen and (max-width: 900px) {
        width: 250px;
        height: 50px;
    }

    @media screen and (max-width: 540px) {
        width: 200px;
    }

    @media screen and (max-width: 450px) {
        font-size: 12px;
        width: 150px;
    }

    @media screen and (max-width: 350px) {
        width: 130px;
    }
`;

const SchoolContactContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1240px) {
        flex-direction: column;
        height: 60%;
    }

    @media screen and (max-width: 900px) {
        height: 70%;
        flex-direction: row;
    }
`;

const SchoolContactP = styled.p`
    font-size: 18px;
    font-weight: bold;

    @media screen and (max-width: 1240px) {
        margin: 20px 0;
    }

    @media screen and (max-width: 450px) {
        font-size: 16px;
    }

    @media screen and (max-width: 350px) {
        font-size: 14px;
    }
`;

export {
    Wrapper,
    DescriptionSection,
    Description,
    ExecutorParagraph,
    SchoolSection,
    LogoWrapper,
    Logo,
    SchoolButton,
    SchoolContactContainer,
    SchoolContactP,
};
