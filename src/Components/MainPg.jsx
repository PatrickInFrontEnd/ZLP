/* Example file to style &  build structure*/

import React, { memo } from "react";
import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import { NavBtn } from "../layouts/Nav";
import { Colors } from "./Colors";
import { BlueHeader } from "./BlueHeader";
import { P } from "./P";
import { NavLink } from "react-router-dom";

const MainPg = (props) => {
    return (
        <Wrap id="main">
            <MainContent>
                <Content>
                    <BlueHeader>
                        Zerknij śmiało i dołącz do turnieju!
                    </BlueHeader>
                    <GamesSection>
                        <GameIMG src="Images/LoL.png" alt="League of Legends" />
                        <GameIMG src="Images/CS.png" alt="Counter Strike" />
                        <GameIMG src="Images/fifa.png" alt="Fifa" />
                    </GamesSection>
                    <TournamentDescription>
                        <P>
                            Skoro odwiedziłeś tę stronę to zakładam, że pewnie
                            zamierzasz wziąć udział w tegorocznym ZLP. Chcesz
                            udowodnić kto w tej szkole najlepiej włada myszką i
                            klawiaturą? Nic prostszego.
                        </P>
                        <P>
                            W zakładce regulamin znajdziesz regulamin rozgrywek,
                            nie jest on skomplikowany, ale ma pomóc w uniknięciu
                            problemów wywołanych niedopowiedzeniami
                        </P>
                        <P>
                            Co w planach? Tam znajdziesz trochę informacji na
                            temat tego co będzie się działo tego dnia w szkole.
                            Mamy parę ciekawych pomysłów, nawet jeśli nie
                            zamierzasz brać udziału w turnieju w trakcie przerw
                            będziesz mógł podejść na piętro, zbić piątkę z
                            kolegami którzy nie będą musieli trudzić się
                            lekcjami tego dnia, a my zajmiemy się tym aby nie
                            było nudno!
                        </P>
                        <P>
                            Drabinka - nic prostszego, w tej zakładce znajdować
                            się będzie tabela przedstawiająca wszystkie drużyny
                            biorące udział w zawodach w grze CS:GO i ich drogę
                            do wielkiego finału
                        </P>

                        <NavLink to="/rejestracja">
                            <GoToRegistration isBig isWhite isBorder noBefore>
                                Zarejestruj się by wziąć udział w turnieju
                                legend!
                            </GoToRegistration>
                        </NavLink>
                    </TournamentDescription>
                </Content>
                <SocialMedia />
            </MainContent>
        </Wrap>
    );
};

export default memo(MainPg);

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
        width: 80%;
        padding: 0;
        margin: 50px auto;
    }
`;

const GoToRegistration = styled(NavBtn)`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media screen and (max-width: 1600px) {
        width: 70%;
    }
    @media screen and (max-width: 1175px) {
        font-size: 20px;
    }

    @media screen and (max-width: 1090px) {
        width: 80%;
    }
    @media screen and (max-width: 990px) {
        width: 100%;
        text-align: center;
    }
`;
