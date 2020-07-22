import React, { Component, createRef, memo } from "react";
import { callbackAnimation } from "../hooks/useAnimation.hook";
import { Wrapper, Button, Container, Form, H2, I, Input } from "./SignInPage";

class LogInPage extends Component {
    state = {
        name: "",
        password: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.password) {
            this.setState({
                name: "",
                password: "",
            });
            console.log("formularz wysłany");
        } else console.log("pola musza byc wypełnione");
    };

    wrapper = createRef(null);

    componentDidMount() {
        callbackAnimation(this.wrapper);
    }

    render() {
        return (
            <Container ref={this.wrapper}>
                <Form action="" onSubmit={this.handleSubmit}>
                    <H2>Zaloguj się</H2>
                    <Wrapper>
                        <Input
                            type="email"
                            id="name"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.name}
                            placeholder="Email"
                        />

                        <I className="fas fa-envelope fa-xs" />
                    </Wrapper>
                    <Wrapper className="control is-medium has-icons-left">
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
                        <Button
                            type="submit"
                            className="button is-info is-medium"
                        >
                            Zaloguj się
                        </Button>
                    </Wrapper>
                </Form>
            </Container>
        );
    }
}

export default memo(LogInPage);
