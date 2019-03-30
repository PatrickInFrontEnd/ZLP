import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../Components/Colors";

class Nav extends Component {
  state = {
    isHamburgerClicked: false
  };
  handleClick = () => {
    this.setState(prev => ({ isHamburgerClicked: !prev.isHamburgerClicked }));
  };
  render() {
    return (
      <Navigation>
        <NavLink to="/">
          <IMG src="Images/logo.png" alt="ZLP" />
        </NavLink>
        <NavSection>
          <NavBtnStyle>
            <NavLink to="/">
              <NavBtn>Strona Główna</NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/blog">
              <NavBtn>Blog</NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/drabinka">
              <NavBtn>Drabinka</NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/regulamin">
              <NavBtn>Regulamin</NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/plany">
              <NavBtn>Co w planach</NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/rejestracja">
              <NavBtn isBig isWhite isBorder GreenHover>
                Zarejestruj się
              </NavBtn>
            </NavLink>
          </NavBtnStyle>
          <NavBtnStyle>
            <NavLink to="/logowanie">
              <NavBtn isBig isWhite isBorder GreenHover>
                Zaloguj się
              </NavBtn>
            </NavLink>
          </NavBtnStyle>
        </NavSection>
        <HamburgerBtn
          onClick={this.handleClick}
          isClicked={this.state.isHamburgerClicked}
        >
          <Span isClicked={this.state.isHamburgerClicked} />
          <Span isClicked={this.state.isHamburgerClicked} />
          <Span isClicked={this.state.isHamburgerClicked} />
          <Span isClicked={this.state.isHamburgerClicked} />
          <Span isClicked={this.state.isHamburgerClicked} />
        </HamburgerBtn>
      </Navigation>
    );
  }
}

export default Nav;

/* note: Styled-Components section */

const Navigation = styled.nav`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  padding: 0 20px;
  background-color: #11111c;
  border-bottom: 2px solid #000;
  z-index: 10;
/* TODO: */
  /* @media screen and (max-width:1400px){
    justify-content:space-between;
  } */
`;

const IMG = styled.img`
  height: 70px;
  width: 204px;
  margin-top: 5px;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 100%;
/* TODO: */
  /* @media screen and (max-width:1400px){
    visibility:hidden;
    opacity:0;
    width:0;
  } */
`;

const NavBtnStyle = styled.div`
  display: flex;
  text-align: center;
  margin-left: 20px;
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 0%;
    background-color: #fff;
    transition: 0.2s ease-in-out all;
  }

  &:nth-of-type(6)::before,
  &:nth-of-type(7)::before {
    display: none;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const NavBtn = styled.div`
  position: relative;
  padding: 10px 15px;
  font-family: "Nunito", "Montserrat", "Arial", "Sans-Serif";
  font-size: ${props => (props.isBig ? "22px" : "18px")};
  font-weight: 700;
  color: ${Colors.blue_nav};
  border: ${props => (props.isBorder ? "2px solid" : "none")};
  border-radius: 10px;
  transition: 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) all;

  &:hover {
    color: #fff;
    border-color: #1abc9c;
  }
`;

const HamburgerBtn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 10px;
  width: 60px;
  height: 60px;
  padding: 10px;
  margin:0 50px 0 0;
  border-radius: 50%;
  border:2px solid;
  background-color:transparent;
  color:${Colors.blue_nav};
  transition:.5s;
  cursor: pointer;
/* TODO: */
  /* @media screen and (min-width:1400px){
    visibility:hidden;
    opacity:0;
    display:none;
  } */

  &:hover{
    background-color: ${Colors.white};
    color:#000;
  }
  &:hover span{
    background-color: #000;
  }
`;

const Span = styled.span`
  position: relative;
  top: 2px;
  display: block;
  width: 100%;
  height: 3px;
  margin: 0 0 5px;
  background-color: #3a91ca;
  transition:1s;
  &:nth-child(1) {
    opacity: ${props => (props.isClicked ? 0 : 1)};
    visibility: ${props => (props.isClicked ? "hidden" : "visible")};
  }
  &:nth-child(2) {
    opacity: ${props => (props.isClicked ? 0 : 1)};
    visibility: ${props => (props.isClicked ? "hidden" : "visible")};
  }
  &:nth-child(3) {
    opacity: ${props => (props.isClicked ? 0 : 1)};
    visibility: ${props => (props.isClicked ? "hidden" : "visible")};
  }
  &:nth-child(4) {
    opacity: ${props => (props.isClicked ? 1 : 0)};
    visibility: ${props => (props.isClicked ? "visible" : "hidden")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width:80%;
    height: 3px;
  }
  &:nth-child(5) {
    opacity: ${props => (props.isClicked ? 1 : 0)};
    visibility: ${props => (props.isClicked ? "visible" : "hidden")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width:80%;
    height: 3px;
  }
`;
