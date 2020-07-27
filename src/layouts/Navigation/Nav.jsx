import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    Navigation,
    IMG,
    NavBtn,
    NavSection,
    HamburgerBtn,
    Span,
} from "./Nav.styles";
import { navigationContext } from "./../../contexts/navigation_context/navigation.provider";
import gsap from "gsap";
import logoPNG from "./../../Img/logo_optimized.png";

const Nav = (props) => {
    const { isNavOpened, toggleClick, currentY, navVisible } = useContext(
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
            if (currentY >= 80) animateNav("out");
        }
    }, [isNavOpened, navVisible, currentY]);

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
                <NavLink to="/ranking">
                    <NavBtn noBoxShadow onClick={toggleNavBtnClick}>
                        Ranking
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
