import React, { Component } from "react";
import "bulma";
import styled from "styled-components";

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

class LogInPage extends Component {
  state = {
    name: "",
    password: ""
  };

  handleChange = e => {
    if (e.target.dataset.name === "password")
      this.setState({ password: e.target.value });
    if (e.target.dataset.name === "name")
      this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name && this.state.password) {
      this.setState({
        name: "",
        password: ""
      });
      console.log("formularz wysłany");
    } else console.log("pola musza byc wypoenione");
  };

  render() {
    return (
      <Container>
        <Form action="" onSubmit={this.handleSubmit}>
          <H2 className="label is-large">Zaloguj się</H2>
          <Wrapper className="control is-medium has-icons-left">
            <Input
              type="email"
              className="input is-medium"
              id="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              data-name="name"
              placeholder="email"
            />
            <span className="is-medium icon is-left">
              <i className="fas fa-envelope fa-xs" />
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
          <Wrapper>
            <Button type="submit" className="button is-info is-medium">
              Zaloguj się
            </Button>
          </Wrapper>
        </Form>
      </Container>
    );
  }
}

export default LogInPage;
