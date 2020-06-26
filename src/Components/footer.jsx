import React from "react";
import styled from "styled-components";
import { Colors } from "./Colors";
import logoPNG from "./../Img/logo_optimized.png";
import { NavBtn } from "./../layouts/Nav";
//TODO: Create footer component

const Footer = (props) => (
    <Wrapper>
        <DescriptionSection>
            <div>
                <Description>
                    Turniej ZLP - platforma internetowa służąca organizacji
                    turnieju ©2019.
                </Description>
                <Description>Wszelkie prawa zastrzeżone.</Description>
            </div>
            <ExecutorParagraph>
                Stronę przygotował: Patryk Płuciennik
            </ExecutorParagraph>
        </DescriptionSection>
        <SchoolSection>
            <LogoWrapper>
                <Logo src={logoPNG} alt="ZLP logo" />
            </LogoWrapper>

            <SchoolContactContainer>
                <SchoolButton
                    as="a"
                    href="http://ckziu.zbaszynek.pl/"
                    target="_blank"
                    isBorder
                    isWhite
                    noBefore
                >
                    Odwiedź stronę szkoły
                </SchoolButton>
                <SchoolContactP>
                    CKZiU im. Jana Pawła II
                    <br />
                    ul. Kolejowa 4
                    <br />
                    66-210 Zbąszynek
                </SchoolContactP>
            </SchoolContactContainer>
        </SchoolSection>
    </Wrapper>
);

export default Footer;

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
`;