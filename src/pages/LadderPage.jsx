import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div``;
const Ledder = styled.div``;
const Collection = styled.div``;
const PlaceOfTeam = styled.div``;
const QuarterfinalColumns = styled.div``;
const SemiFinalsColumns = styled.div``;
const Teams = styled.div``;
const TeamSquads = styled.div``;
const H3 = styled.h3``;
const H1 = styled.h1``;
const P = styled.p``;
const I = styled.i``;
const Icon = styled.div``;

class LedderPage extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Ledder>
                    <Collection>
                        <H3>1/4 turnieju</H3>
                        <QuarterfinalColumns>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                        </QuarterfinalColumns>
                        <QuarterfinalColumns>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                        </QuarterfinalColumns>
                    </Collection>
                    <Collection>
                        <H3>1/2 turnieju</H3>
                        <SemiFinalsColumns>
                            <PlaceOfTeam>
                                <P>1/2</P>
                            </PlaceOfTeam>
                        </SemiFinalsColumns>
                        <SemiFinalsColumns>
                            <PlaceOfTeam>
                                <P>1/2</P>
                            </PlaceOfTeam>
                        </SemiFinalsColumns>
                    </Collection>
                    <Collection>
                        <PlaceOfTeam>
                            <P>final</P>
                        </PlaceOfTeam>
                        <Icon><I></I></Icon>
                        <PlaceOfTeam>
                            <P>final</P>
                        </PlaceOfTeam>
                    </Collection>
                    <Collection>
                        <H3>1/2 turnieju</H3>
                        <SemiFinalsColumns>
                            <PlaceOfTeam>
                                <P>1/2</P>
                            </PlaceOfTeam>
                        </SemiFinalsColumns>
                        <SemiFinalsColumns>
                            <PlaceOfTeam>
                                <P>1/2</P>
                            </PlaceOfTeam>
                        </SemiFinalsColumns>
                    </Collection>
                    <Collection>
                        <H3>1/4 turnieju</H3>
                        <QuarterfinalColumns>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                        </QuarterfinalColumns>
                        <QuarterfinalColumns>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                            <PlaceOfTeam>
                                <P>1/4</P>
                            </PlaceOfTeam>
                        </QuarterfinalColumns>
                    </Collection>
                </Ledder>
                <Teams>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                    <TeamSquads>
                        <H1>Nazwa drużyny</H1>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                        <P>Imie "NICK" Nazwisko</P>
                    </TeamSquads>
                </Teams>
            </Container>
        );
    }
}

export default LedderPage;