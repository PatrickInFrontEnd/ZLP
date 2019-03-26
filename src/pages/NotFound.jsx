import React from 'react';
//How to import constant variable-element
import { Header } from './../Components/Header';
import styled from "styled-components";
//Global Colors
import { Colors } from './../Components/Colors';
import { Button } from './../Components/Button';
const NotFound = () => {
    return (
        <Wrap>
            <HEADER>Błąd : 404 - nie znaleziono podanego adresu</HEADER>
            <Button href="/" BrColorHover="#000" BGChover="#000" Color="#fff" ColorHover="#05A1E9" >Powrót</Button>
        </Wrap>

    );
}

export default NotFound;

const Wrap = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    min-height:calc(100vh - 80px)
`;

/* How to overwrite features of an imported element for example 'Header': */
const HEADER = styled(Header)` /* 'HEADER' is overwritten 'Header' */
    width:90%;
    font-size:36px;
    font-weight:900;
    border:4px solid;
    border-color:${Colors.blue_nav};
    margin-bottom:100px;
`;