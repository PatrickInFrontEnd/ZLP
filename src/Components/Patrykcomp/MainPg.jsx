/* Example file to style &  build structure*/

import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavBtn } from "./../../layouts/Nav";
import SocialMedia from "./../SocialMedia";
import { Colors } from "./../Colors";
import { BlueHeader } from "./../BlueHeader";
import { P } from "./../P";

class MainPg extends Component {
  state = {};
  render() {
    return (
      <Wrap id="main" className="target">
        <MainContent>
          <Content>
            <BlueHeader>Zerknij śmiało i dołącz do turnieju!</BlueHeader>
            <GamesSection>
              <GameIMG src="Images/LoL.png" alt="League of Legends" />
              <GameIMG src="Images/CS.png" alt="Counter Strike" />
              <GameIMG src="Images/fifa.png" alt="Fifa" />
            </GamesSection>
            <TournamentDescription>
              <P>
                Skoro odwiedziłeś tę stronę to zakładam, że pewnie zamierzasz
                wziąć udział w tegorocznym ZLP. Chcesz udowodnić kto w tej
                szkole najlepiej włada myszką i klawiaturą? Nic prostszego.
              </P>
              <P>
                W zakładce regulamin znajdziesz regulamin rozgrywek, nie jest on
                skomplikowany, ale ma pomóc w uniknięciu problemów wywołanych
                niedopowiedzeniami
              </P>
              <P>
                Co w planach? Tam znajdziesz trochę informacji na temat tego co
                będzie się działo tego dnia w szkole. Mamy parę ciekawych
                pomysłów, nawet jeśli nie zamierzasz brać udziału w turnieju w
                trakcie przerw będziesz mógł podejść na piętro, zbić piątkę z
                kolegami którzy nie będą musieli trudzić się lekcjami tego dnia,
                a my zajmiemy się tym aby nie było nudno!
              </P>
              <P>
                Drabinka - nic prostszego, w tej zakładce znajdować się będzie
                tabela przedstawiająca wszystkie drużyny biorące udział w
                zawodach w grze CS:GO i ich drogę do wielkiego finału
              </P>
              <NavLink to="/rejestracja">
                <NAVBTN isBig isWhite isBorder GreenHover>
                  Zarejestruj się by wziąć udział w turnieju legend!
                </NAVBTN>
              </NavLink>
            </TournamentDescription>
          </Content>
          <SocialMedia />
        </MainContent>
        <BlogSection>
          <GetToKnowOurBlog>
            Poznaj naszego bloga!
          </GetToKnowOurBlog>
          <BlogBtn to="/blog">Przejdź na bloga</BlogBtn>
          <Blog>Miejsce na Bloga</Blog>
        </BlogSection>
      </Wrap>
    );
  }
}

export default MainPg;

const Wrap = styled.div`
  width: 100%;
  color: ${Colors.white};
  padding-bottom:20px;
`;

const BlogSection = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  /* background-image: linear-gradient(55deg, #0a3d62 0% 45%, #079992 55% 100%); */
  background-color: ${Colors.bgColor};
  display: flex;
  align-items: center;
  flex-direction:column;
  overflow: hidden;
`;

const GetToKnowOurBlog = styled(BlueHeader)`
  position: relative;
  width: 70%;
  margin:30px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 4px;
  z-index: 4;

  @media screen and (max-width:1200px){
    flex-direction:column;
    width:90%;
  }
`;

const Blog = styled.div`
  position: relative;
  width: 70%;
  min-height:50vh;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color: #000;
  border: 2px solid;
  border-color: #fff;

  @media screen and (max-width:950px){
    width:90%;
    min-height:calc(100vh - 120px);
  }
`;

const BlogBtn = styled(NavLink)`
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
  margin:40px auto 60px;
  border: 2px solid ${Colors.light_green};
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  overflow: hidden;
  z-index: 5;

  @media screen and (max-width:1200px){
    margin:20px auto 40px;
  }

  &:hover {
    border: 2px solid;
    background-color: transparent;
    color: ${Colors.blue_text};
    box-shadow: 0 0 10px 1px ${Colors.blue_text};
  }
`;

const MainContent = styled.section`
  min-height: 300px;
  margin:0 auto;
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

  @media screen and (max-width:880px){
      width:490px;
      max-width:490px;
      min-height:240px;
      flex-shrink:0;
    }
    @media screen and (max-width:620px){
      width:80%;
      flex-direction:column;
      flex-shrink:0;
    }
`;

const GameIMG = styled.img`
  min-width: 100px;
  height: 120px;

  @media screen and (max-width:620px){
      max-width:160px;
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

  @media screen and (max-width:750px) {
    width:80%;
    padding:0;
    margin:50px auto;
  }
`;

const NAVBTN = styled(NavBtn)`
  width: 50%;
  margin: 0 auto;

  @media screen and (max-width:1600px) {
    width:70%;
  }
  @media screen and (max-width:1175px) {
    font-size:20px;
  }
  
  @media screen and (max-width:1090px) {
    width:80%;
  }
  @media screen and (max-width:990px) {
    width:100%;
    text-align:center;
  }
`;
