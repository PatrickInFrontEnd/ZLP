import React, { Component } from "react";
import "bulma";
import styled from "styled-components";

const Container = styled.div``;
const Ledder = styled.div``;
const Collection = styled.div``;
const PlaceOfTeam = styled.div``;
const QuarterfinalColumns = styled.div``;
const SemiFinalsColumns = styled.div``;
const H3 = styled.h3;

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
                        <Collection>
                </Ledder>
                        {/* <Teams>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                            <div class="teamSquads">
                                <h1>Nazwa drużyny</h1>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                                <p>Imie "NICK" Nazwisko</p>
                            </div>
                        </Teams> */}
            </Container>
                    );
                }
            }
            
export default LedderPage;