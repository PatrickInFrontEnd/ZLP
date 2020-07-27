import styled from "styled-components";
import { Colors } from "./../../utils/Colors.theme";
import { Wrapper } from "./../../Components/Wrapper component/Wrapper.styles";

export const Container = styled(Wrapper)`
    width: 100%;
    min-height: calc(100vh -80px);
    padding: 30px 60px 1px;
    color: ${Colors.white};
    @media screen and (min-width: 1340px) and (min-height: 830px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: calc(100vh - 80px);
    }
`;
