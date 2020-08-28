import React, { useRef, memo } from "react";
import useAnimation from "./../../hooks/useAnimation.hook";
import {
    Container,
    Ledder,
    Collection,
    PlaceOfTeam,
    QuarterfinalColumns,
    SemiFinalsColumns,
    Final,
    H3,
    PInLederSection,
    P,
} from "./RankingPage.styles";

const RankingPage = (props) => {
    const ref = useRef(null);
    useAnimation(ref);

    return (
        <Container ref={ref}>
            <Ledder>
                <Collection>
                    <H3>Ćwierćfinał</H3>
                    <QuarterfinalColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                    </QuarterfinalColumns>
                    <QuarterfinalColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                    </QuarterfinalColumns>
                </Collection>
                <Collection>
                    <H3>Półfinał</H3>
                    <SemiFinalsColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/2</PInLederSection>
                        </PlaceOfTeam>
                    </SemiFinalsColumns>
                    <SemiFinalsColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/2</PInLederSection>
                        </PlaceOfTeam>
                    </SemiFinalsColumns>
                </Collection>
                <Collection>
                    <PlaceOfTeam>
                        <Final>
                            <PInLederSection>Finał</PInLederSection>
                        </Final>
                    </PlaceOfTeam>

                    <PlaceOfTeam>
                        <Final>
                            <PInLederSection>Finał</PInLederSection>
                        </Final>
                    </PlaceOfTeam>
                </Collection>
                <Collection>
                    <H3>Półfinał</H3>
                    <SemiFinalsColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/2</PInLederSection>
                        </PlaceOfTeam>
                    </SemiFinalsColumns>
                    <SemiFinalsColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/2</PInLederSection>
                        </PlaceOfTeam>
                    </SemiFinalsColumns>
                </Collection>
                <Collection>
                    <H3>Ćwierćfinał</H3>
                    <QuarterfinalColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                    </QuarterfinalColumns>
                    <QuarterfinalColumns>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                        <PlaceOfTeam>
                            <PInLederSection>1/4</PInLederSection>
                        </PlaceOfTeam>
                    </QuarterfinalColumns>
                </Collection>
            </Ledder>
            <P>Póki co żadna drużyna nie została zarejestrowana</P>
        </Container>
    );
};

export default memo(RankingPage);
