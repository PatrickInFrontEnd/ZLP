import React, { Component } from "react";
import styled from "styled-components";
import "bulma";

const Container = styled.div`
  font-family: "Nunito";
  width: 500px;
  padding: 150px 0 0 0;
  margin: 0 auto 0;
  color: white;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 550px) {
    width: 90%;
    padding: 30px 0 0 0;
  }
`;
const Wrapper = styled.div`
  margin: 30px 5px;
`;
const H2 = styled.h2`
  color: white !important;
  padding: 15px 0 0 0;
  font-size: 3rem !important;
  text-align: center;
  @media only screen and (max-width: 550px) {
    font-size: 2rem !important;
  }
`;
const Form = styled.form`
  width: 100%;
`;
const Button = styled.button`
  font-family: "Nunito" !important;
  background-color: #3273dc !important;
  &:hover {
    background-color: #1051ba !important;
  }
`;
const Input = styled.input`
  font-family: "Nunito" !important;
`;

class SignInPage extends Component {
  state = {
    email: "",
    password: "",
    reapettedPassword: "",
    userName: ""
  };

  handleChange = e => {
    if (e.target.dataset.name === "password")
      this.setState({ password: e.target.value });
    if (e.target.dataset.name === "email")
      this.setState({ email: e.target.value });
    if (e.target.dataset.name === "reapettedPassword")
      this.setState({ reapettedPassword: e.target.value });
    if (e.target.dataset.name === "userName")
      this.setState({ userName: e.target.value });
  };

  handleSubmit = e => {
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
        reapettedPassword: "",
        userName: ""
      });
      console.log("formularz wysłany");
    } else console.log("pola musza byc wypoenione");
  };

  render() {
    return (
      <Container>
        <Form action="" onSubmit={this.handleSubmit}>
          <H2 className="label is-large">Zarejestruj się</H2>
          <Wrapper className="control is-medium has-icons-left">
            <Input
              type="email"
              className="input is-medium"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.email}
              data-name="email"
              placeholder="email"
            />
            <span className="is-medium icon is-left">
              <i className="fas fa-envelope fa-xs" />
            </span>
          </Wrapper>
          <Wrapper className="control is-medium has-icons-left">
            <Input
              type="text"
              className="input is-medium"
              name="password"
              id="userName"
              onChange={this.handleChange}
              value={this.state.userName}
              data-name="userName"
              placeholder="nazwa użytkownika"
            />
            <span className="is-medium icon is-left">
              <i className="fas  fa-user" />
            </span>
          </Wrapper>
          <Wrapper className="control is-medium has-icons-left">
            <Input
              type="password"
              className="input is-medium"
              name="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              data-name="password"
              placeholder="hasło"
            />
            <span className="is-medium icon is-left">
              <i className="fas fa-lock" />
            </span>
          </Wrapper>
          <Wrapper className="control is-medium has-icons-left">
            <Input
              type="password"
              className="input is-medium"
              name="reapettedPassword"
              id="reapettedPassword"
              onChange={this.handleChange}
              value={this.state.reapettedPassword}
              data-name="reapettedPassword"
              placeholder="powtórz hasło"
            />
            <span className="is-medium icon is-left">
              <i className="fas fa-lock" />
            </span>
          </Wrapper>
          <Wrapper>
            <Button type="submit" className="button is-info is-medium">
              Zarejestruj się
            </Button>
          </Wrapper>
        </Form>
      </Container>
    );
  }
}

export default SignInPage;
