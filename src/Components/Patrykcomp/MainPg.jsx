/* Example file to style &  build structure*/

import React, { Component } from "react";
import styled from "styled-components";

class MainPg extends Component {
  state = {};
  render() {
    return (
      <Wrap>
        <BlogSection>
          <GetToKnowOurBlog>Poznaj naszego bloga!</GetToKnowOurBlog>
          <BlogBtn>Blog ZLP</BlogBtn>
          <Blog>Miejsce na Bloga</Blog>
        </BlogSection>
        <MainContent>
          <SMediaSection>
            <SMedia content="'Facebook'" bgcHov="#4267B2"><I className="fab fa-facebook-f"></I></SMedia>
            <SMedia content="'Youtube'" bgcHov="#FF0000"><I className="fab fa-youtube"></I></SMedia>
            <SMedia content="'Twitch'" bgcHov="#6441A5"><I className="fab fa-twitch"></I></SMedia>
          </SMediaSection>
        </MainContent>
      </Wrap>
    );
  }
}

export default MainPg;

const Wrap = styled.div`
  width: 100%;
  color: #fff;
`;

const BlogSection = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  background-image: linear-gradient(55deg, #0a3d62 0% 45%, #079992 55% 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const GetToKnowOurBlog = styled.h1`
  position: absolute;
  top: 20%;
  font-size: 46px;
  font-weight: bolder;
  transform: translate(20%, -50%);
  width: 600px;
  padding: 10px 15px;
  border-bottom: 2px solid;
  color: #f5f6fa;
  letter-spacing: 4px;
`;

const Blog = styled.div`
  position: absolute;
  bottom: 10%;
  left: 60%;
  transform: translate(-40%, 10%);
  width: 60%;
  height:60%;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  background-color:#000;
`;

const BlogBtn = styled.a`
    color:#fff;
    background-color:transparent;
    font-size:20px;
    font-weight:900;
    font-family:'Nunito','Saira','Montserrat','Arial','Sans-Serif';
    text-align:center;
    line-height:60px;
    letter-spacing:2px;
    width:300px;
    border:2px solid;
    border-radius:10px;
    transition:.3s cubic-bezier(0.215, 0.610, 0.355, 1);
    transform:translate(40%,-100%);
    position:absolute;
    top:50%;
    overflow:hidden;
    z-index:5;

    &:hover{
      border-color:#000;
      color: #27c3fb;
      box-shadow:0 0 15px 1px #000;
    }

    &::before{
      content:'';
      position:absolute;
      left:0;
      bottom: 0;
      display:block;
      width:100%;
      height:0;
      background-color:#000;
      transition:.3s;
      z-index:-1;
    }

    &:hover::before{
      height:100%;
    }
`;


const MainContent = styled.section`
    min-height:300px;
    padding:100px 30px 50px;
    background-color:#000;
    color: #1B9CFC;
    font-family:'Montserrat','Saira','Nunito','Arial','Sans-Serif';
`;

const SMediaSection = styled.section`
    display:flex;
    justify-content:space-around;
    align-items:center;
    flex-wrap:wrap;
    box-sizing:content-box;
    position:relative;
    width:60%;
    min-height:150px;
    margin:0 auto;
    padding:30px 0;
    border-radius:20px;
    border:2px solid;

    &::before{
      content:'Media społecznościowe ZLP';
      position:absolute;
      top:-65px;
      left:-80px;
      font-size:24px;
      font-weight:900;
      color: #fff;
    }
`;

const SMedia = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    height:100px;
    width:100px;
    margin:10px;
    border-bottom:2px solid;
    border-left:2px solid;
    border-radius:50%;
    position: relative;

    &:hover{
      background-color:${({ bgcHov }) => bgcHov};
      color: #fff;
      border-color:transparent;
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
    width:200px;
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
    font-size:36px;
`;