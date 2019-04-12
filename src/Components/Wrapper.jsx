import styled from 'styled-components';

export const Wrapper = styled.div`
max-width: 1400px;
margin: 0 auto;
min-height:calc(100vh -80px);
padding:30px 60px 1px;

@media screen and (max-width:420px) {
    padding:30px 15px 1px;
}
`;