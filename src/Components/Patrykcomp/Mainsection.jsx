/* Example file to style &  build structure*/

import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    margin:0;
    padding:0;
    width:100%;
    height:100vh;
    background-color:#333;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
`;

const P = styled.p`
    font-weight:bolder;
    font-size:26px;
    padding:20px 40px;
    border:2px solid;
    border-radius:10px;
    animation:bounce 2s infinite ;
`;



class Wrapper extends Component {
    state = {}
    render() {
        return (
            <Wrap >
                <P>Main Page</P>
            </Wrap>
        );
    }
}

export default Wrapper;