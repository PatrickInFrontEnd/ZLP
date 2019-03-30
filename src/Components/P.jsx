import styled from 'styled-components';
import { Colors } from './../Components/Colors';

export const P = styled.p`
  color:${Colors.blue_text};
  font-size: 22px;
  font-weight: 700;
  width:60vw;
  padding: 20px 40px;
  border-top: 2px solid #2f383f;
  border-bottom: 2px solid #2f383f;
  margin: 0 auto 40px;
  text-align:justify;
  text-align-last:center;

  @media screen and (max-width:1470px){
    font-size:20px;
  }

  @media screen and (max-width:1250px) {
    width:70vw;
  }

  @media screen and (max-width:880px){
    font-size:18px;
  }

  @media screen and (max-width:950px) {
    width:60vw;
  }
  @media screen and (max-width:750px) {
    width:90%;
    padding:10px 20px;
  }
  @media screen and (max-width:680px){
    width:100%;
    font-size:16px;
    word-break:keep-all;
  }
`;