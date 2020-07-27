import React from "react";
import {
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
} from "./Footer.styles";
import logoPNG from "./../../Img/logo_optimized.png";

const Footer = (props) => (
    <Wrapper>
        <DescriptionSection>
            <div>
                <Description>
                    Turniej ZLP - platforma internetowa służąca organizacji
                    turnieju.
                </Description>
                <Description>©2019 - ©2020</Description>
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
