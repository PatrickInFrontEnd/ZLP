import React, { Component } from 'react';
import styled from "styled-components";
import { Colors } from './../Components/Colors';
import { SHeader } from './../Components/SHeader';
import { BlueHeader } from './../Components/BlueHeader';
import { P } from './../Components/P';

const Container = styled.div`
    width:100%;
    min-height:calc(100vh -80px);
    padding:30px 60px 1px;
    color:${Colors.white};
`;
const MediaWrapper = styled.div``;
const Games = styled.div``;

class PlansPage extends Component {
    state = {}
    render() {
        return (

            <Container>
                <BlueHeader>Zobacz co cię czeka!</BlueHeader>
                <SHeader>Do wyboru jest turniej Counter Strike Global Offensive 5v5, gdzie ze znajomymi możecie pokazać zgranie i wspólnie powalczyć o nagrody lub League of Legends, w której liczyć się będą "zwinne palce" i twoje umiejętności.</SHeader>
                <MediaWrapper>
                    <Games>
                    </Games>
                    <Games>
                    </Games>
                    <Games>
                    </Games>
                    <Games>
                    </Games>
                </MediaWrapper>
                <BlueHeader isFZ>A co jeśli nie zdecydujesz się na wzięcie udziału w zabawie?</BlueHeader>
                <P>Spokojnie o tym tez pomyśleliśmy.
                Podczas przerw, na korytarzu będzie możliwość zagrania w Fife lub Just Dance.
                Chcielibyśmy aby cała szkoła wraz z nami świetnie bawiła się tego dnia. Liczymy, że znajdziesz coś dla
                    siebie i będziesz się świetnie bawił w miłej atmosferze. Do zobaczenia!</P>
            </Container>

        );
    }
}

export default PlansPage;