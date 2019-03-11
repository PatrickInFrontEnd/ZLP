/* Example file to style &  build structure*/

import React, { Component } from 'react';
import styled from 'styled-components';


class MainPg extends Component {
    state = {}
    render() {
        return (
            <Wrap>
                <BannerSection >
                    <Banner>Witaj Graczu!</Banner>
                    <BannerBtn href="#a" ><DownArrow className="fas fa-angle-double-down" /></BannerBtn>
                    <CheckOutTitle>Sprawdź co cię czeka!</CheckOutTitle>
                </BannerSection>
                <BannerSection id="a"></BannerSection>
            </Wrap >
        );
    }
}

export default MainPg;


const Wrap = styled.div`
            width:100%;
        `;

const BannerSection = styled.div`
            position:relative;
            font-family:'Montserrat','Saira','Arial','Sans-serif';
            width:100%;
            min-height:100vh;
            background-image: url("../../../Images/baner.png");
            background-size:cover;
            background-position:center center;
            color:#fff;
            transition:.5s all;
        `;



const Banner = styled.h1`
            position:absolute;
            top:20%;
            left:50%;
            transform:translate(-50%,-50%);
            width: 50%;
            padding:10px 20px;
            font-size:46px;
            border:1px solid #fff;
            border-radius:10px;
            text-align:center;
            text-transform:uppercase;
        `;

const BannerBtn = styled.a`
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            width:100px;
            height:100px;
            border-radius:50%;
            border-bottom:4px solid;
            border-right:4px solid;
            color: #fff;
        `;

const DownArrow = styled.i`
                display:block;
                position:absolute;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                font-size:46px;
                animation:bounce 1s infinite;
        @keyframes bounce{
                    0% {
                        transform: translate(-50%,-50%) translateY(0px);
                    }
            50%{
                    transform: translate(-50%,-50%) translateY(15px);
            }
            100%{
                transform: translate(-50%,-50%) translateY(0px);
            }
        }
`;

const CheckOutTitle = styled.h3`
    position:absolute;
    bottom:20%;
    left:50%;
    transform:translate(-50%,-50%);
    width:30%;
    font-size:20px;
    font-weight:400;
    text-align:center;
`;