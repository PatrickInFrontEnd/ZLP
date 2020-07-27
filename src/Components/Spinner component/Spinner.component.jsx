import React from "react";
import {
    Wrapper,
    LoaderContent,
    LoaderItem,
    TextWrapper,
    LoaderText,
} from "./Spinner.styles";

const Spinner = (props) => (
    <Wrapper>
        <LoaderContent>
            <LoaderItem>
                <LoaderItem>
                    <LoaderItem>
                        <LoaderItem>
                            <LoaderItem>
                                <LoaderItem>
                                    <LoaderItem>
                                        <LoaderItem>
                                            <LoaderItem>
                                                <LoaderItem></LoaderItem>
                                            </LoaderItem>
                                        </LoaderItem>
                                    </LoaderItem>
                                </LoaderItem>
                            </LoaderItem>
                        </LoaderItem>
                    </LoaderItem>
                </LoaderItem>
            </LoaderItem>
        </LoaderContent>
        <TextWrapper>
            <LoaderText delayId={1}>l</LoaderText>
            <LoaderText delayId={2}>o</LoaderText>
            <LoaderText delayId={3}>a</LoaderText>
            <LoaderText delayId={4}>d</LoaderText>
            <LoaderText delayId={5}>i</LoaderText>
            <LoaderText delayId={6}>n</LoaderText>
            <LoaderText delayId={7}>g</LoaderText>
            <LoaderText delayId={8}>.</LoaderText>
            <LoaderText delayId={9}>.</LoaderText>
            <LoaderText delayId={10}>.</LoaderText>
        </TextWrapper>
    </Wrapper>
);

export default Spinner;
