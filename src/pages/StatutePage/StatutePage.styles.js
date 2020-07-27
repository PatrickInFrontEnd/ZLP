import styled from "styled-components";
import { BlueHeader } from "./../../Components/BlueHeader component/BlueHeader.styles";
import { Header } from "./../../Components/Header component/Header.styles";
import { P } from "./../../Components/P component/P.styles";
import { Colors } from "./../../utils/Colors.theme";

const MYBlueHeader = styled(BlueHeader)`
    width: ${(props) => (props.is100 ? "100%" : "80%")};
    text-align: center;
    font-size: ${(props) => (props.isFZ ? "42px" : "56px")};

    @media screen and (max-width: 640px) {
        width: 100%;
    }
`;

const StatuteHeader = styled(Header)`
    width: 100%;
    margin: 0 0 50px;
    padding: 20px 30px;
    font-size: 28px;
    font-weight: 700;
    border-radius: 0;
    border: none;
    border-bottom: 2px solid ${Colors.white};

    @media screen and (max-width: 790px) {
        padding: 20px 10px;
        font-size: 24px;
    }
    @media screen and (max-width: 680px) {
        padding: 20px 0px;
        font-size: 22px;
    }
`;

const MyP = styled(P)`
    border: none;
    margin: 0 0 20px;
    text-align: left;
    text-align-last: left;

    @media screen and (max-width: 1200px) {
        font-size: 20px;
    }
    @media screen and (max-width: 1100px) {
        padding: 10px 20px;
    }
    @media screen and (max-width: 830px) {
        padding: 10px;
        margin: 0 auto 20px;
        text-align: center;
        text-align-last: center;
        font-size: 18px;
    }
    @media screen and (max-width: 670px) {
        padding: 0;
        text-align: center;
        text-align-last: center;
    }
`;

export { MYBlueHeader, StatuteHeader, MyP };
