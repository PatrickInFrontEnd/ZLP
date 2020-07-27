import React, { memo } from "react";
import gsap from "gsap";
import {
    BannerWrapper,
    Banner,
    BannerBtn,
    DownArrow,
    CheckOutTitle,
} from "./BannerSection.styles";

const BannerSection = (props) => {
    const handleBannerClick = () => {
        gsap.to(document, { duration: 1, scrollTo: "#main" });
    };

    return (
        <BannerWrapper>
            <Banner>Witaj Graczu!</Banner>
            <BannerBtn onClick={handleBannerClick} href="#main">
                <DownArrow className="fas fa-angle-double-down" />
            </BannerBtn>
            <CheckOutTitle>Sprawdź co cię czeka!</CheckOutTitle>
        </BannerWrapper>
    );
};

export default memo(BannerSection);
