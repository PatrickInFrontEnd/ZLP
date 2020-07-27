import React, { memo } from "react";
import {
    Wrap,
    MainContent,
    Content,
    GamesSection,
    GameIMG,
    TournamentDescription,
    GoToRegistration,
} from "./MainPg.styles";
import SocialMedia from "./../SocialMedia component/SocialMedia.component";
import { BlueHeader } from "../BlueHeader component/BlueHeader.styles";
import { P } from "./../P component/P.styles";
import { NavLink } from "react-router-dom";
import lolPNG from "./../../Img/LoL.png";
import CSPNG from "./../../Img/CS.png";
import fifaPNG from "./../../Img/fifa.png";

const MainPg = (props) => {
    return (
        <Wrap id="main">
            <MainContent>
                <Content>
                    <BlueHeader>
                        Zerknij śmiało i dołącz do turnieju!
                    </BlueHeader>
                    <GamesSection>
                        <GameIMG src={lolPNG} alt="League of Legends" />
                        <GameIMG src={CSPNG} alt="Counter Strike" />
                        <GameIMG src={fifaPNG} alt="Fifa" />
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

                        <NavLink
                            to="/rejestracja"
                            style={{ margin: "0 auto", display: "block" }}
                        >
                            <GoToRegistration
                                isBig
                                isWhite
                                isBorder
                                noBoxShadow
                            >
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
