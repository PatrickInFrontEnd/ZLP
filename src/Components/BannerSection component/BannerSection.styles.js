import styled from "styled-components";
import { Colors } from "./../../utils/Colors.theme";
import banerJPG from "./../../Img/baner.jpg";

const BannerWrapper = styled.div`
    font-family: "Nunito";
    position: relative;
    width: 100%;
    min-height: calc(100vh - 80px);
    max-height: 1080px;
    background-image: url(${banerJPG});
    background-size: cover;
    background-position: center center;
    color: ${Colors.white};
`;

const Banner = styled.h1`
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    padding: 10px 20px;
    font-size: 48px;
    font-weight: 900;
    border: 2px solid #fff;
    border-radius: 20px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;

    @media screen and (max-width: 1200px) {
        font-size: 42px;
    }
    @media screen and (max-width: 990px) {
        width: 60%;
    }
    @media screen and (max-width: 840px) {
        width: 80%;
    }
    @media screen and (max-width: 640px) {
        font-size: 36px;
    }
    @media screen and (max-width: 560px) {
        width: 90%;
    }
    @media screen and (max-width: 440px) {
        width: 90%;
        font-size: 28px;
    }
`;

const BannerBtn = styled.a`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border-bottom: 4px solid;
    border-right: 4px solid;
    color: #fff;

    @media screen and (max-height: 550px) {
        left: 60%;
        top: 65%;
    }
    @media screen and (max-height: 550px) and (max-width: 960px) {
        left: 75%;
    }
    @media screen and (max-height: 550px) and (max-width: 640px) {
        left: 70%;
    }

    &::before,
    &::after {
        box-sizing: content-box;
        position: absolute;
        color: #fff;
        opacity: 0;
        visibility: hidden;
        transition: 0.3s cubic-bezier(0.45, 0.61, 0.355, 1);

        @media screen and (max-width: 660px) {
            display: none;
            content: none;
        }

        @media screen and (max-height: 550px) {
            display: none;
            content: none;
        }
    }

    &::before {
        content: "";
        width: 25px;
        height: 25px;
        transform: translateY(-50%) rotate(45deg);
        background-color: #fff;
        right: -42px;
        top: 50%;
    }
    &::after {
        content: "Kliknij by sprawdzić . . .";
        right: -250px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        width: 200px;
        padding: 0 10px;
        border-radius: 20px;
        border: 2px solid;
        font-size: 14px;
        font-weight: bolder;
        background-color: #000;
        z-index: 2;

        @media screen and (max-width: 660px) {
            display: none;
            content: none;
        }

        @media screen and (max-height: 550px) {
            display: none;
            content: none;
        }
    }

    &:hover::after,
    &:hover::before {
        opacity: 1;
        visibility: visible;
    }
    &:hover {
        color: #fff;
    }
`;

const DownArrow = styled.i`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 46px;
    animation: bounce 1s infinite;
    @keyframes bounce {
        0% {
            transform: translate(-50%, -50%) translateY(0px);
        }
        50% {
            transform: translate(-50%, -50%) translateY(15px);
        }
        100% {
            transform: translate(-50%, -50%) translateY(0px);
        }
    }
`;

const CheckOutTitle = styled.h3`
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 30%;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-family: "Nunito", "Montserrat", "Saira", "Arial", "Sans-Serif";

    @media screen and (max-height: 550px) {
        bottom: 35%;
        left: 40%;
    }
    @media screen and (max-height: 550px) and (max-width: 960px) {
        left: 35%;
    }
`;

export { BannerWrapper, Banner, BannerBtn, DownArrow, CheckOutTitle };
