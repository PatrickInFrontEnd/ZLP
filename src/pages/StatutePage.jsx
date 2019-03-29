import React, { Component } from 'react';
import styled from 'styled-components';
import { BlueHeader } from './../Components/BlueHeader';
import { Header } from './../Components/Header';
import { P } from './../Components/P';
import { Colors } from './../Components/Colors';

class StatutePage extends Component {
    state = {}
    render() {
        return (
            <Wrapper>
                <MYBlueHeader>Teraz trochę formalności . . .</MYBlueHeader>
                <SHeader>Jeśli zdecydowałeś się na udział w turnieju, musisz poznać kilka zasad zawartych w tym regulaminie. Pozwoli to na miłą rozgrywkę bez niepotrzebnych niedomówień.</SHeader>
                <StatuteHeader>Podstawowe zasady turnieju :</StatuteHeader>
                <P>
                    <MyP> 1. Udział w turnieju jest jednoznaczny z akceptacją niniejszego regulaminu.</MyP>
                    <MyP> 2. Obowiązuje zakaz obrażania i wyzywania przeciwników.</MyP>
                    <MyP> 3. Nad rozgrywkami będą czuwać administratorzy turnieju.</MyP>
                    <MyP> 4. Na finał turnieju w Counter Stirke'a zakfalifikuje się 8 drużyn.</MyP>
                    <MyP> 5. Uczestnicy mogą przynieść swoją myszkę, klawiaturę, słuchawki i podkładkę w celu zapewnienia wyższego komfortu rozgrywki.</MyP>
                    <MyP> 6. Gramy na ustawieniach niskich w celu uzyskania płynności rozgrywki, a każdy proszony jest o przyniesienie ze sobą konfiguracji, aby nie marnować na nią zbyt dużo czasu.</MyP>
                    <MyP> 7. Przed każdym meczem gracz będzie miał 20 minut na przygotowanie stanowiska.</MyP>
                    <MyP> 8. Każdy gracz jest zobowiązany do używania nicku oraz tagu drużyny wprowadzonego w formularzu zgłoszeniowym.</MyP>
                </P>
                <MYBlueHeader is100 isFZ>
                    Dla zawodników grających w Leauge of Legends
                </MYBlueHeader>
                <SHeader>Turniej rozgrywany jest na mapie Howling Abyss. Grę wygrywa ten kto jako pierwszy zabije swojego przeciwnika, wykończy setnego miniona lub zburzy przeciwną wieżę.
                </SHeader>
                <MYBlueHeader is100 isFZ>Dla zawodników grających w Counter Strike</MYBlueHeader>
                <SHeader>Mecze będą rozgrywane tylko na mapach z puli turniejowej. Każda drużyna podczas gry ma możliwość wykorzystania jednej pauzy, która trwa maksymalnie 5 minut. Gramy systemem BO1, w którym każda drużyna banuje 2 mapy, z pozostałych losowana jest mapa na której będzie prowadzona rozgrywka. Finał gramy w systemie BO3, a wybór map wygląda następująco: 1 drużyna banuje mapę, 2 drużyna banuje mapę, 1 drużyna wybiera mapę, 2 drużyna wybiera mapę, 1 drużyna banuje mapę, 2 drużyna banuje mapę. Trzecią mapą na której możliwa będzie rozgrywka jest ta która nie pozostała wybrana i wyrzucona.Jeżeli uczestnik złamie regulamin, jego drużyna będzie zdyskfalifikowana.
                </SHeader>
            </Wrapper>
        );
    }
}

export default StatutePage;

const Wrapper = styled.div`
            width:100%;
            min-height:calc(100vh -80px);
            padding:30px 60px 1px;
        `;

const MYBlueHeader = styled(BlueHeader)`
            width:${(props) => props.is100 ? '100%' : '80%'};
            text-align:center;
            font-size:${(props) => props.isFZ ? '42px' : '56px'};
        `;

const SHeader = styled(Header)`
            border:none;
            line-height:180%;
            width:100%;
            font-size:20px;
            margin-bottom:50px;
        `;

const StatuteHeader = styled(Header)`
            width:100%;
            margin:0 0 50px;
            padding:20px 30px;
            font-size:28px;
            font-weight:700;
            border-radius:0;
            border:none;
            border-bottom:2px solid ${Colors.white};
`;

const MyP = styled(P)`
    border:none;
    margin:0 0 20px;
    text-align:center;
`;