import React, { PureComponent, createRef } from "react";
import styled from "styled-components";
import { callbackAnimation } from "../Components/useAnimation.hook";
import { Colors } from "../Components/Colors";

export const Container = styled.div`
    font-family: "Nunito", "Saira", "Montserrat", "Arial", "Sans-Serif";
    width: 500px;
    padding: 0;
    margin: 0 auto 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 300px);
    @media only screen and (max-width: 550px) {
        width: 90%;
        padding: 30px 0 0 0;
    }
`;
export const Wrapper = styled.div`
    position: relative;
    margin: 20px 5px;
`;

export const I = styled.i`
    color: ${Colors.blue_text};
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-40px, -50%);
    font-size: 24px;
    transition: 0.3s;
`;
export const H2 = styled.h2`
    color: ${Colors.white};
    padding: 15px 0 0 0;
    margin-bottom: 50px;
    font-size: 3rem;
    text-align: center;
    @media only screen and (max-width: 550px) {
        font-size: 2rem;
    }
`;
export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Button = styled.button`
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
        background-color: ${Colors.blue_text};
        box-shadow: 0 0 5px 2px ${Colors.blue_nav};
    }
`;
export const Input = styled.input`
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
`;

class SignInPage extends PureComponent {
    state = {
        email: "",
        password: "",
        repeatPassword: "",
        userName: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.email &&
            this.state.password &&
            this.state.reapettedPassword &&
            this.state.userName
        ) {
            this.setState({
                email: "",
                password: "",
                repeatPassword: "",
                userName: "",
            });
            console.log("formularz wysłany");
        } else console.log("pola muszą być wypełnione");
    };

    ref = createRef(null);

    componentDidMount() {
        callbackAnimation(this.ref);
    }

    render() {
        return (
            <Container ref={this.ref}>
                <Form action="" onSubmit={this.handleSubmit}>
                    <H2>Zarejestruj się</H2>
                    <Wrapper>
                        <Input
                            type="email"
                            id="name"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                            placeholder="Email"
                        />

                        <I className="fas fa-envelope fa-xs" />
                    </Wrapper>
                    <Wrapper>
                        <Input
                            type="text"
                            name="userName"
                            id="userName"
                            onChange={this.handleChange}
                            value={this.state.userName}
                            placeholder="Nazwa użytkownika"
                        />

                        <I className="fas  fa-user" />
                    </Wrapper>
                    <Wrapper>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Hasło"
                        />

                        <I className="fas fa-lock" />
                    </Wrapper>
                    <Wrapper>
                        <Input
                            type="password"
                            name="repeatPassword"
                            id="repeatPassword"
                            onChange={this.handleChange}
                            value={this.state.repeatPassword}
                            placeholder="Powtórz hasło"
                        />

                        <I className="fas fa-lock" />
                    </Wrapper>
                    <Wrapper>
                        <Button type="submit">Zarejestruj się</Button>
                    </Wrapper>
                </Form>
            </Container>
        );
    }
}

export default SignInPage;
