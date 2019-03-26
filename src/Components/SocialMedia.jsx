import React, { Component } from 'react';
import styled from 'styled-components';

/* SOCIAL MEDIA is converted as component. WRITE '<SocialMedia/>' to add this. */

class SocialMedia extends Component {
  state = {}
  render() {
    return (
      <SMediaSection>
        <SMedia href="https://www.facebook.com/ckziuzbaszynek/" content="'Facebook'" bgcHov="#4267B2">
          <I className="fab fa-facebook-f" />
        </SMedia>
        <SMedia href="https://www.youtube.com/channel/UCB8Ky1jlPbiZe5Fm_EUCxCg" content="'Youtube'" bgcHov="#FF0000">
          <I className="fab fa-youtube" />
        </SMedia>
        <SMedia href="https://www.twitch.tv/zlpstream" content="'Twitch'" bgcHov="#6441A5">
          <I className="fab fa-twitch" />
        </SMedia>
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

  &::before {
    content: "Bądź z nami na bieżąco !";
    position: absolute;
    top: -65px;
    left: -80px;
    font-size: 24px;
    font-weight: 900;
    color: #fff;
  }
`;

const SMedia = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100px;
  width: 100px;
  margin: 10px;
  border: 2px solid;
  border-radius: 50%;
  position: relative;

  &:hover {
    background-color: ${({ bgcHov }) => bgcHov};
    color: #fff;
    box-shadow: inset 0 0 15px 5px #111;
  }

  &::before,
  &::after {
    box-sizing: content-box;
    position: absolute;
    color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s cubic-bezier(0.45, 0.61, 0.355, 1);
  }

  &::before {
    content: "";
    width: 25px;
    height: 25px;
    transform: translateY(-50%) rotate(45deg);
    background-color: #fff;
    right: -42px;
    top: 50%;
  }
  &::after {
    content: ${({ content }) => content};
    right: -250px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 200px;
    padding: 0 10px;
    border-radius: 20px;
    border: 2px solid;
    font-size: 14px;
    font-weight: bolder;
    background-color: #000;
    z-index: 2;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

const I = styled.i`
  font-size: 36px;
`;