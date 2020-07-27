import styled from "styled-components";
import { Header } from "./../../Components/Header component/Header.styles";
import { Colors } from "./../../utils/Colors.theme";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: calc(100vh - 80px);
`;

const NotFoundHeader = styled(Header)`
    /* 'HEADER' is overwritten 'Header' */
    width: 90%;
    font-size: 36px;
    font-weight: 900;
    border: 4px solid;
    border-color: ${Colors.blue_nav};
    margin-bottom: 100px;
`;

export { Wrap, NotFoundHeader };
