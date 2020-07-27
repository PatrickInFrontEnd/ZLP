import styled from "styled-components";
import { Colors } from "../../utils/Colors.theme";

const Container = styled.div`
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    width: 500px;
    padding: 0;
    margin: 0 auto 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 250px);
    @media only screen and (max-width: 550px) {
        width: 90%;
        padding: 30px 0 0 0;
    }
`;
const Wrapper = styled.div`
    position: relative;
    margin: 20px 5px;
`;

const I = styled.i`
    color: ${Colors.blue_text};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-40px, -50%);
    font-size: 24px;
    transition: 0.3s;
`;
const H2 = styled.h2`
    color: ${Colors.white};
    padding: 15px 0 0 0;
    margin-bottom: 50px;
    font-size: 3rem;
    text-align: center;
    @media only screen and (max-width: 550px) {
        font-size: 2rem;
    }
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Button = styled.button`
    width: 300px;
    height: 50px;
    margin-top: 20px;
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    font-size: 18px;
    font-weight: bold;
    background-color: ${Colors.light_green};
    color: ${Colors.white};
    outline: none;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover,
    &:focus {
        box-shadow: 0 0 2px 2px ${Colors.light_green};
    }

    @media screen and (max-width: 440px) {
        width: 250px;
    }
`;
const Input = styled.input`
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    width: 300px;
    height: 30px;
    outline: none;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${Colors.blue_nav};
    transition: 0.3s;
    color: ${Colors.white};

    &:focus {
        border-bottom: 2px solid ${Colors.white};

        &::placeholder {
            color: ${Colors.white};
        }

        ~ ${I} {
            color: ${Colors.white};
        }
    }

    @media screen and (max-width: 440px) {
        width: 220px;
    }

    @media screen and (max-width: 360px) {
        position: relative;
        left: 10px;
        width: 200px;
    }
`;

export { Container, I, H2, Form, Button, Input, Wrapper };
