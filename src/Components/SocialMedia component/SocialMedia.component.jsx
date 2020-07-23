import React, { Component } from "react";
import styled from "styled-components";
import { Colors } from "./Colors";

/* SOCIAL MEDIA is converted as component. WRITE '<SocialMedia/>' to add this. */

class SocialMedia extends Component {
    state = {};
    render() {
        return (
            <SMediaSection>
                <MediaLink
                    href="https://www.facebook.com/ckziuzbaszynek/"
                    bgcHov="#3b5998"
                    target="_blank"
                >
                    <I className="fab fa-facebook-f" />
                </MediaLink>
                <MediaLink
                    href="https://www.youtube.com/channel/UCB8Ky1jlPbiZe5Fm_EUCxCg"
                    bgcHov="#cc181e"
                    target="_blank"
                >
                    <I className="fab fa-youtube" />
                </MediaLink>
                <MediaLink
                    href="https://www.twitch.tv/zlpstream"
                    bgcHov="#6441A5"
                    target="_blank"
                >
                    <I className="fab fa-twitch" />
                </MediaLink>
            </SMediaSection>
        );
    }
}

export default SocialMedia;

//Variables
const SMediaSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    box-sizing: content-box;
    position: relative;
    width: 60%;
    min-height: 150px;
    margin: 100px auto 0;
    padding: 30px 0;
    border-radius: 20px;
    border: 2px solid;

    @media screen and (min-width: 1260px) {
        max-width: 830px;
    }

    @media screen and (max-width: 975px) {
        flex-direction: column;
        max-width: 300px;
    }

    &::before {
        content: "Bądź z nami na bieżąco !";
        position: absolute;
        top: -65px;
        left: -80px;
        font-size: 24px;
        font-weight: 900;
        color: ${Colors.white};

        @media screen and (max-width: 975px) {
            left: 50%;
            transform: translateX(-50%);
            width: 50vw;
        }
        @media screen and (max-width: 700px) {
            left: 50%;
            transform: translateX(-50%);
            width: 70vw;
        }
    }
`;

const MediaLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100px;
    width: 100px;
    margin: 10px;
    border: 2px solid;
    border-radius: 50%;
    color: ${Colors.blue_text};

    &:hover {
        background-color: ${({ bgcHov }) => bgcHov};
        color: #fff;
    }
`;

const I = styled.i`
    font-size: 36px;
`;
