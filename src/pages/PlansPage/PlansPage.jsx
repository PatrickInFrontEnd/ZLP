import React, { useRef, memo } from "react";
import useAnimation from "./../../hooks/useAnimation.hook";
import { SHeader } from "./../../Components/SHeader component/SHeader.styles";
import { BlueHeader } from "../../Components/BlueHeader component/BlueHeader.styles";
import { Container } from "./PlansPage.styles";

const PlansPage = (props) => {
    const ref = useRef(null);
    useAnimation(ref);

    return (
        <Container ref={ref}>
            <BlueHeader>Zobacz co cię czeka!</BlueHeader>
            <SHeader>
                Do wyboru jest turniej Counter Strike Global Offensive 5v5,
                gdzie ze znajomymi możecie pokazać zgranie i wspólnie powalczyć
                o nagrody lub League of Legends, w której liczyć się będą
                "zwinne palce" i twoje umiejętności.
            </SHeader>

            <BlueHeader isFZ>
                A co jeśli nie zdecydujesz się do wzięcia udziału w zabawie?
            </BlueHeader>
            <SHeader>
                Spokojnie o tym tez pomyśleliśmy. Podczas przerw, na korytarzu
                będzie możliwość zagrania w Fifę lub Just Dance. Chcielibyśmy
                aby cała szkoła wraz z nami świetnie bawiła się tego dnia.
                Liczymy, że znajdziesz coś dla siebie i będziesz się świetnie
                bawił w miłej atmosferze. Do zobaczenia!
            </SHeader>
        </Container>
    );
};

export default memo(PlansPage);
