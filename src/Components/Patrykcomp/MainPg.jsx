/* Example file to style &  build structure*/

import React, { Component } from "react";
import styled from "styled-components";

class MainPg extends Component {
  state = {}
  render() {
    return (
      <Wrap>
        <BannerSection >
          <Banner>Witaj Graczu!</Banner>
          <BannerBtn cont="Kliknij" href="#"><DownArrow className="fas fa-angle-double-down" /></BannerBtn>
          <CheckOutTitle>Sprawdź co cię czeka!</CheckOutTitle>
        </BannerSection>
        <BlogSection>
          <GetToKnowOurBlog>Poznaj naszego bloga!</GetToKnowOurBlog>
          <BlogBtn>Blog ZLP</BlogBtn>
          <Blog >Miejsce na Bloga</Blog>
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

const BannerSection = styled.div`
  font-family: "Nunito";
  position: relative;
  width: 100%;
  min-height: calc(100vh - 80px);
  background-image: url("../../../Images/baner.png");
  background-size: cover;
  background-position: center center;
`;

const Banner = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  padding: 10px 20px;
  font-size: 48px;
  font-weight: 900;
  border: 2px solid #fff;
  border-radius: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const BannerBtn = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-bottom: 4px solid;
  border-right: 4px solid;
  color: #fff;

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
    content:'Kliknij by sprawdzić...';
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
  &:hover {
    color: #fff;
  }
`;

const DownArrow = styled.i`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 46px;
  animation: bounce 1s infinite;
  @keyframes bounce {
    0% {
      transform: translate(-50%, -50%) translateY(0px);
    }
    50% {
      transform: translate(-50%, -50%) translateY(15px);
    }
    100% {
      transform: translate(-50%, -50%) translateY(0px);
    }
  }
`;

const CheckOutTitle = styled.h3`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 30%;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

const BlogSection = styled.section`
    width:100%;
    height:calc(100vh - 80px);
    position:relative;
    background-image:linear-gradient(55deg,#0a3d62 0% 45%,#079992 55% 100%);
    display:flex;
    align-items:center;
    overflow:hidden;
`;

const GetToKnowOurBlog = styled.h1`
    position:absolute;
    top:20%;
    font-size:46px;
    font-weight:bolder;
    font-family:'Nunito';
    line-height:80px;
    transform:translate(20%,-50%);
    padding:5px 20px;
    border:2px solid;
    border-radius:20px;
    color: #f5f6fa;
    letter-spacing:4px;
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

const Blog = styled.div`
    position:absolute;
    bottom: 5%;
    right:5%;
    width:60%;
    height:60%;
    color: #000;
    background-color:#fff;
    box-shadow:10px 10px 40px 1px #000;
    overflow:auto;
`;