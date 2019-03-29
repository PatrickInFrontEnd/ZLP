import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { Colors } from "../Components/Colors";
import { hamburgerAnimation } from './Hamburger';

class Nav extends Component {
  state = {};
  render() {
    return (
      <Navigation>
        <NavLink to="/">
          <IMG src="Images/logo.png" alt="ZLP" />
        </NavLink>
        <NavSection>
          <NavBtnStyle><NavLink to="/"><NavBtn>Strona Główna</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/blog"><NavBtn>Blog</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/drabinka"><NavBtn>Drabinka</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/regulamin"><NavBtn>Regulamin</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/plany"><NavBtn>Co w planach</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/rejestracja"><NavBtn isBig isWhite isBorder GreenHover>Zarejestruj się</NavBtn></NavLink></NavBtnStyle>
          <NavBtnStyle><NavLink to="/logowanie"><NavBtn isBig isWhite isBorder GreenHover>Zaloguj się</NavBtn></NavLink></NavBtnStyle>
        </NavSection>
        <HamburgerBtn onClick={hamburgerAnimation}>
          <Span></Span>
          <Span></Span>
          <Span></Span>
        </HamburgerBtn>
      </Navigation>
    );
  }
}

export default Nav;

/* note: Styled-Components section */

const Navigation = styled.nav`
      position:sticky;
      left:0;
      right:0;
      top:0;
      display:flex;
      justify-items:center;
      justify-content: space-around;
      width:100%;
      height:80px;
      padding:0 20px;
      background-color:#20202C;
      border-bottom:2px solid #444;
      z-index:10;
      `;


const IMG = styled.img`
      height:70px;
      width:204px;
      margin-top:5px;
      `;

const NavSection = styled.div`
      display:flex;
      justify-content:flex-end;
      align-items:center;
      width:80%;
      height:100%;
      `;

const NavBtnStyle = styled.div`
      display:flex;
      text-align:center;
      margin-left:20px;
      position: relative;

      &::before{
      content:'';
      display:block;
      position: absolute;
      bottom: -5px;
      left:0;
      height: 2px;
      width: 0%;
      background-color: #fff;
      transition: .2s ease-in-out all;
      }

      &:nth-of-type(6)::before,
      &:nth-of-type(7)::before{
        display:none;
      }

      &:hover::before{
        width:100%;
      }
      `;

export const NavBtn = styled.div`
      position:relative;
      padding:10px 15px;
      font-family: 'Nunito','Montserrat','Arial','Sans-Serif';
      font-size: ${(props) => props.isBig ? '22px' : '18px'};
      font-weight:700;
      color: ${Colors.blue_nav};
      border: ${(props) => props.isBorder ? '2px solid' : 'none'};
      border-radius:10px;
      transition:.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) all;

      &:hover{
        color:#fff;
        border-color:#1abc9c;
      }
`;

const HamburgerBtn = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    top:10px;
    width:60px;
    height:60px;
    padding:10px;
    border-radius:50%;
    background-color: ${Colors.bgColor};
    cursor: pointer;
`;

const Span = styled.span`
    position: relative;
    top:2px;
    display:block;
    width:100%;
    height:5px;
    margin:0 0 3px;
    border-radius:2px;
    background-color: #3a91ca;
`;