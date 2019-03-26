import styled from 'styled-components';

/* ALLOWED PROPS:
Color="#color" - color of the element before hover statement
BrColorHover="#color" - border-color at hover ,
ColorHover="#color" - color of the text at hover ,
BGChover="#color" - background-color at hover

*/

export const Button = styled.a`
position: relative;
color: ${({ Color }) => Color};
background-color: transparent;
font-size: 20px;
font-weight: 900;
font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
text-align: center;
line-height: 60px;
letter-spacing: 2px;
width: 300px;
border: 2px solid;
border-radius: 10px;
transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
overflow: hidden;
z-index: 5;

&:hover {
  border-color: ${({ BrColorHover }) => BrColorHover};
  color: ${({ ColorHover }) => ColorHover};
  box-shadow: 0 0 15px 1px ${({ BGChover }) => BGChover};
}

&::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 0;
  background-color: ${({ BGChover }) => BGChover};
  transition: 0.3s;
  z-index: -1;
}

&:hover::before {
  height: 100%;
}
`;