import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../Components/Colors";

class Nav extends Component {
    state = {
        isHamburgerClicked: false,
    };
    handleClick = () => {
        this.setState((prev) => ({
            isHamburgerClicked: !prev.isHamburgerClicked,
        }));
    };
    render() {
        return (
            <Navigation>
                <NavLink to="/">
                    <IMG src="Images/logo.png" alt="ZLP" />
                </NavLink>
                <NavSection>
                    <NavLink to="/">
                        <NavBtn>Strona Główna</NavBtn>
                    </NavLink>
                    <NavLink to="/drabinka">
                        <NavBtn>Drabinka</NavBtn>
                    </NavLink>
                    <NavLink to="/regulamin">
                        <NavBtn>Regulamin</NavBtn>
                    </NavLink>
                    <NavLink to="/plany">
                        <NavBtn>Co w planach</NavBtn>
                    </NavLink>
                    <NavLink to="/rejestracja">
                        <NavBtn isBig isWhite isBorder noBefore>
                            Zarejestruj się
                        </NavBtn>
                    </NavLink>

                    <NavLink to="/logowanie">
                        <NavBtn isBig isWhite isBorder noBefore>
                            Zaloguj się
                        </NavBtn>
                    </NavLink>
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

    @media screen and (max-width: 1024px) {
        justify-content: space-between;
    }
`;

const IMG = styled.img`
    height: 70px;
    max-height: 100%;
    width: 204px;
    margin-top: 5px;
`;

const NavSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 100%;

    @media screen and (max-width: 1024px) {
        visibility: hidden;
        opacity: 0;
        width: 0;
    }
`;

export const NavBtn = styled.span`
    position: relative;
    padding: 10px 15px;
    font-family: "Nunito", "Montserrat", "Arial", "Sans-Serif";
    font-size: ${({ isBig }) => (isBig ? "22px" : "18px")};
    font-weight: 700;
    color: ${Colors.blue_nav};
    border: ${({ isBorder }) => (isBorder ? "2px solid" : "none")};
    border-radius: 10px;
    transition: 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19) all;
    display: flex;
    text-align: center;
    margin-left: 20px;
    position: relative;
    cursor: pointer;

    ${({ noBefore }) =>
        noBefore
            ? ""
            : `&::before {
               content: "";
               display: block;
               position: absolute;
               bottom: -0px;
               left: 0;
               height: 2px;
               width: 0%;
               background-color: #fff;
               transition: 0.2s ease-in-out all;
           }`}

    &:hover {
        color: #fff;
        border-color: ${Colors.light_green};
    }

    &:hover::before {
        width: 100%;
    }

    @media screen and (max-width: 1440px) {
        font-size: ${({ isBig }) => (isBig ? "20px" : "18px")};
        margin-left: 10px;
    }
    @media screen and (max-width: 1260px) {
        font-size: ${({ isBig }) => (isBig ? "18px" : "16px")};
    }
    @media screen and (max-width: 1170px) {
        padding: 5px;
    }
`;

const HamburgerBtn = styled.div`
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 10px;
    width: 60px;
    height: 60px;
    padding: 10px;
    margin: 0 10px 0 0;
    border-radius: 50%;
    border: 2px solid;
    background-color: transparent;
    color: ${Colors.blue_nav};
    transition: 0.5s;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    display: none;

    @media screen and (max-width: 1024px) {
        visibility: visible;
        opacity: 1;
        display: flex;
    }

    &:hover {
        background-color: ${Colors.white};
        color: #000;
    }
    &:hover span {
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
    transition: 1s;
    &:nth-child(1) {
        opacity: ${(props) => (props.isClicked ? 0 : 1)};
        visibility: ${(props) => (props.isClicked ? "hidden" : "visible")};
    }
    &:nth-child(2) {
        opacity: ${(props) => (props.isClicked ? 0 : 1)};
        visibility: ${(props) => (props.isClicked ? "hidden" : "visible")};
    }
    &:nth-child(3) {
        opacity: ${(props) => (props.isClicked ? 0 : 1)};
        visibility: ${(props) => (props.isClicked ? "hidden" : "visible")};
    }
    &:nth-child(4) {
        opacity: ${(props) => (props.isClicked ? 1 : 0)};
        visibility: ${(props) => (props.isClicked ? "visible" : "hidden")};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 80%;
        height: 3px;
    }
    &:nth-child(5) {
        opacity: ${(props) => (props.isClicked ? 1 : 0)};
        visibility: ${(props) => (props.isClicked ? "visible" : "hidden")};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 80%;
        height: 3px;
    }
`;
