import styled from 'styled-components';

export const BlueHeader = styled.h1`
  width: 100%;
  line-height: 80px;
  padding: 20px 0;
  margin: 0 auto 50px;
  font-size:${(props) => props.isFZ ? '42px' : '56px'};
  font-weight: 700;
  font-family:'Nunito','Montserrat','Arial','Sans-Serif';
  color: #fff;
  border-top: 4px solid #1b9cfc;
  border-bottom: 4px solid #1b9cfc;
  text-align:center;
`;