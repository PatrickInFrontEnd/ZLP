import React, { PureComponent, createRef } from "react";
import { callbackAnimation } from "../../hooks/useAnimation.hook";
import {
    Container,
    I,
    H2,
    Form,
    Button,
    Input,
    Wrapper,
} from "./SignInPage.styles";

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
