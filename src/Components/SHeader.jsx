import styled from 'styled-components';
import { Colors } from './Colors';
import { Header } from './Header';

export const SHeader = styled(Header)`
            border:none;
            line-height:180%;
            width:100%;
            font-size:20px;
            margin-bottom:50px;
            color:${Colors.white};
        `;