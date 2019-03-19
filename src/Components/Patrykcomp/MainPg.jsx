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

const BlogBtn = styled.a`
  color: #fff;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  letter-spacing: 2px;
  width: 300px;
  border: 2px solid;
  border-radius: 10px;
  transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translate(40%, -100%);
  position: absolute;
  top: 50%;
  overflow: hidden;
  z-index: 5;

  &:hover {
    color: rgb(100, 255, 255);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 0;
    background-color: #130f40;
    transition: 0.3s;
    z-index: -1;
  }

  &:hover::before {
    height: 100%;
  }
`;

const Blog = styled.div`
  position: absolute;
  bottom: 5%;
  right: 5%;
  width: 60%;
  height: 60%;
  color: #000;
  background-color: #fff;
  box-shadow: 10px 10px 40px 1px #000;
  overflow: auto;
`;
