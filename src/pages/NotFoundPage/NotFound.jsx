import React, { useRef, memo } from "react";
import useAnimation from "./../../hooks/useAnimation.hook";
import { Wrap, NotFoundHeader } from "./NotFound.styles";
import { Button as GoBackLink } from "./../../Components/Button component/Button.styles";

const NotFound = (props) => {
    const ref = useRef(null);
    useAnimation(ref);

    return (
        <Wrap ref={ref}>
            <NotFoundHeader> Nie znaleziono podanego adresu</NotFoundHeader>
            <GoBackLink
                href="/"
                BrColorHover="#000"
                BGChover="#000"
                Color="#fff"
                ColorHover="#05A1E9"
            >
                Powrót
            </GoBackLink>
        </Wrap>
    );
};

export default memo(NotFound);
