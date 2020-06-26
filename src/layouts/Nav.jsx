import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Colors } from "../Components/Colors";
import { navigationContext } from "./../contexts/navigation_context/navigation.provider";
import gsap from "gsap";
import logoPNG from "./../Img/logo_optimized.png";

const Nav = (props) => {
    const { isNavOpened, toggleClick, navVisible } = useContext(
        navigationContext
    );

    const toggleNavBtnClick = () => isNavOpened && toggleClick();

    const navRef = useRef(null);

    const animateNav = (type = "in") => {
        const tl = gsap.timeline();
        const target = navRef.current;

        if (type === "out") {
            tl.to(target, {
                transform: "translateY(-110%)",
                duration: 0.5,
            });
        } else {
            tl.to(target, { transform: "translateY(0)", duration: 0.5 });
        }
    };

    useEffect(() => {
        if (isNavOpened) return;
        if (navVisible) {
            animateNav("in");
        } else {
            animateNav("out");
        }
    }, [isNavOpened, navVisible]);

    return (
        <Navigation ref={navRef}>
            <NavLink to="/">
                <IMG src={logoPNG} alt="ZLP" />
            </NavLink>
            <NavSection navOpened={isNavOpened}>
                <NavLink to="/">
                    <NavBtn noBoxShadow onClick={toggleNavBtnClick}>
                        Strona Główna
                    </NavBtn>
                </NavLink>
                <NavLink to="/drabinka">
                    <NavBtn noBoxShadow onClick={toggleNavBtnClick}>
                        Drabinka
                    </NavBtn>
                </NavLink>
                <NavLink to="/regulamin">
                    <NavBtn noBoxShadow onClick={toggleNavBtnClick}>
                        Regulamin
                    </NavBtn>
                </NavLink>
                <NavLink to="/plany">
                    <NavBtn noBoxShadow onClick={toggleNavBtnClick}>
                        Co w planach
                    </NavBtn>
                </NavLink>
                <NavLink to="/rejestracja">
                    <NavBtn
                        isBig
                        isWhite
                        isBorder
                        noBefore
                        onClick={toggleNavBtnClick}
                    >
                        Zarejestruj się
                    </NavBtn>
                </NavLink>

                <NavLink to="/logowanie">
                    <NavBtn
                        isBig
                        isWhite
                        isBorder
                        noBefore
                        onClick={toggleNavBtnClick}
                    >
                        Zaloguj się
                    </NavBtn>
                </NavLink>
            </NavSection>
            <HamburgerBtn onClick={toggleClick} isClicked={isNavOpened}>
                <Span isClicked={isNavOpened} />
                <Span isClicked={isNavOpened} />
                <Span isClicked={isNavOpened} />
                <Span isClicked={isNavOpened} />
                <Span isClicked={isNavOpened} />
            </HamburgerBtn>
        </Navigation>
    );
};

export default Nav;

/* NOTE: Styled-Components section */

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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

export const NavBtn = styled.span`
    position: relative;
    padding: 10px 15px;
    font-family: "Nunito", "Montserrat", "Arial", "Sans-Serif";
    font-size: ${({ isBig }) => (isBig ? "22px" : "18px")};
    font-weight: 700;
    color: ${({ isWhite }) => (isWhite ? "#fff" : Colors.blue_nav)};
    border: ${({ isBorder }) => (isBorder ? "2px solid" : "none")};
    border-radius: 10px;
    transition: 0.2s ease-in-out all;
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
        ${({ noBoxShadow, isWhite }) =>
            noBoxShadow
                ? ""
                : `box-shadow: 0 0 5px 1px ${
                      isWhite ? "#fff" : Colors.blue_nav$
                  }`}
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

export const NavSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    height: 100%;
    transition: 0.6s;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 500px;
        opacity: 0;
        visibility: hidden;
        background-color: ${Colors.onMediaResizeNavigationColor};

        ${({ navOpened }) =>
            navOpened
                ? `
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
        `
                : `
        transform: translateX(110%);
        opacity: 0;
        visibility: hidden;
        `}

        ${NavBtn} {
            margin-top: 30px;
            padding: 10px 15px;
        }
    }

    @media screen and (max-height: 500px) {
        height: calc(100vh - 80px);
        overflow-y: auto;
        padding: 10px 0;
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
