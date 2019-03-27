/* Example file to style &  build structure*/

import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavBtn } from "./../../layouts/Nav";
import SocialMedia from './../SocialMedia';
import { Colors } from './../Colors';
import { BlueHeader } from './../BlueHeader';

class MainPg extends Component {
  state = {};
  render() {
    return (
      <Wrap id="main" className="target">
        <MainContent>
          <Content>
            <LookWhatIsUp>Zerknij śmiało i dołącz do turnieju!</LookWhatIsUp>
            <GamesSection>
              <GameIMG src="Images/LoL.png" alt="League of Legends" />
              <GameIMG src="Images/CS.png" alt="Counter Strike" />
              <GameIMG src="Images/fifa.png" alt="Fifa" />
              <GameIMG src="Images/jDance.png" alt="Just Dance" />
            </GamesSection>
            <TournamentDescription>
              <Description>
                Skoro odwiedziłeś tę strone to zakładam, że pewnie zamierzasz
                wziać udział w tegorocznym ZLP. Chcesz udowodnić kto w tej
                szkole najlepiej włada myszką i klawiaturą? Nic prostszego.
              </Description>
              <Description>
                W zakładce regulamin znajdziesz regulamin rozgrywek,nie jest on
                skomplikowany, ale ma pomóc w uniknięciu problemów wywołanych
                niedopowiedzeniami.
              </Description>
              <Description>
                Co w planach? Tam znajdziesz trochę informacji na temat tego co
                będzie się działo tego dnia w szkole. Mamy parę ciekawych
                pomysłów, nawet jeśli nie zamierzasz brać udziału w turnieju w
                trakcie przerw będziesz mógł podejść na piętro, zbić piątkę z
                kolegami którzy nie będą musieli trudzić się lekcjami tego dnia,
                a my zajmiemy się tym aby nie było nudno!
              </Description>
              <Description>
                Drabinka - nic prostszego, w tej zakładce znajdować się będzie
                grafika przedstawiająca wszystkie drużyny biorące udział w
                zawodach w grze CS:GO i ich drogę do wielkiego finału.
              </Description>
              <NavLink to="/rejestracja">
                <NavBtn isBig isWhite isBorder GreenHover>
                  Zarejestruj się by wziąć udział w turnieju legend!
                </NavBtn>
              </NavLink>
            </TournamentDescription>
          </Content>
          <SocialMedia />
        </MainContent>
        <BlogSection>
          <GetToKnowOurBlog>
            Poznaj naszego bloga!
            <BlogBtn>Przejdź na bloga</BlogBtn>
          </GetToKnowOurBlog>
          <Blog>Miejsce na Bloga</Blog>
        </BlogSection>
      </Wrap>
    );
  }
}

export default MainPg;

const Wrap = styled.div`
  width: 100%;
  color: #fff;
`;

const BlogSection = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  /* background-image: linear-gradient(55deg, #0a3d62 0% 45%, #079992 55% 100%); */
  background-color: #000;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const GetToKnowOurBlog = styled(BlueHeader)`
  position: absolute;
  top: 15%;
  left:50%;
  width:70%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  font-size: 36px;
  font-weight: 900;
  transform: translate(-50%,-50%);
  letter-spacing: 4px;
  z-index:4;
`;

const Blog = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 70%;
  height: 65%;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color: #000;
  border:2px solid;
  border-color:#fff;
`;

const BlogBtn = styled.a`
  color:${Colors.white};
  background-color: transparent;
  font-size: 20px;
  font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
  text-align: center;
  line-height: 60px;
  font-weight:700;
  letter-spacing: 2px;
  padding:0 30px;
  border: 2px solid ${Colors.green};
  border-radius: 10px;
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
  z-index: 5;

  &:hover {
    color:${Colors.blue_nav};
    border: 2px solid;
    background-color:transparent;
    box-shadow: 0 0 30px 1px ${Colors.blue_text};
  }
`;

const MainContent = styled.section`
  min-height: 300px;
  padding: 100px 30px 50px;
  background-color: #000;
  color: #1b9cfc;
  font-family: "Montserrat", "Saira", "Nunito", "Arial", "Sans-Serif";
`;

const Content = styled.section`
  min-height: 300px;
  width: 100%;
  text-align: center;
`;

const LookWhatIsUp = styled.h1`
  width: 100%;
  line-height: 80px;
  padding: 20px 0;
  margin: 0 auto 50px;
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  border-top: 4px solid #1b9cfc;
  border-bottom: 4px solid #1b9cfc;
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
  border: 3px solid #0097e6;
  border-radius: 20px;
  box-shadow: 0 0 30px 2px #74b9ff;
`;

const GameIMG = styled.img`
  min-width: 100px;
  height: 120px;
`;

const TournamentDescription = styled.article`
  width: 60%;
  min-height: 400px;
  margin: 50px auto;
  padding: 10px 20px;
  text-align: justify;
  text-align-last: center;
  hyphens: auto;
  word-wrap: break-word;
`;

const Description = styled.p`
  font-size: 22px;
  font-weight: 700;
  padding: 20px 40px;
  border-top: 2px solid #2f383f;
  border-bottom: 2px solid #2f383f;
  margin: 0 auto 40px;
`;