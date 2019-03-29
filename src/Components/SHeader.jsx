import styled from 'styled-components';
import { Colors } from './Colors';
import { Header } from './Header';

export const SHeader = styled(Header)`
            border:none;
            line-height:180%;
            width:100%;
            font-size:20px;
            padding:0 300px;
            margin-bottom:50px;
            color:${Colors.white};
            text-align:justify;
            text-align-last:center;

            @media screen and (max-width:1410px) {
                padding:0 200px;
            }
            @media screen and (max-width:1200px) {
                padding:0 40px;
                font-size:16px;
            }
            @media screen and (max-width:640px) {
                text-align:center;
                padding:0 20px;
                font-size:14px;
            }
        `;