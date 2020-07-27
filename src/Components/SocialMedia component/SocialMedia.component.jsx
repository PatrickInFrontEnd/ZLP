import React, { Component } from "react";
import { SMediaSection, MediaLink, I } from "./SocialMedia.styles";

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
