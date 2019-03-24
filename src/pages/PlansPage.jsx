import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const MediaWrapper = styled.div``;
const Games = styled.div``;
const H1 = styled.h1``;
const H2 = styled.h2``;
const P = styled.p``;

class PlansPage extends Component {
    state = {}
    render() {
        return (

            <Container>
                <Wrapper>
                    <H1>Zobacz co cię czeka!</H1>
                    <P>Do wybory jest turniej Counter Strike Global Offensive 5v5, gdzie ze znajomymi możecie pokazać zgranie i
                        wspólnie powalczyć o nagrody lub League of Legends, a tam liczyć się będą zwinne palce i twoje
                umiejętności.</P>
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
                    <H2>A co jeśli nie zdecydujesz się na wziąć udziału w zabawie?</H2>
                    <P>Spokojnie o tym tez pomyśleliśmy. </P>
                    <P>Podczas przerw, na korytarzu będzie możliwość zagrania w Fife lub Just Dance.</P>
                    <P>Chcielibyśmy aby cała szkoła wraz z nami świetnie bawiła się tego dnia. Liczymy, że znajdziesz coś dla
                    siebie i będziesz się świetnie bawił w miłej atmosferze. Do zobaczenia!</P>
                </Wrapper>
            </Container>

        );
    }
}

export default PlansPage;