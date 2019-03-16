import React, { Component } from "react";
import Nav from "./Nav.jsx";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import StatutePage from "../pages/SatutePage";
import PlansPage from "../pages/PlansPage";
import LedderPage from "../pages/LedderPage";
import LogInPage from "../pages/LogInPage";
import SignInPage from "../pages/SignInPage";
import NotFound from "../pages/NotFound";
import styled, { createGlobalStyle } from "styled-components";

const Main = styled.main`
  width: 80%;
  max-width: 1800px;
  margin: 0 auto;
  @media only screen and (max-width: 1824px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Nav />
        <Main>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/regulamin" component={StatutePage} />
            <Route path="/plany" component={PlansPage} />
            <Route path="/drabinka" component={LedderPage} />
            <Route path="/logowanie" component={LogInPage} />
            <Route path="/rejestracja" component={SignInPage} />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
    *{
      padding:0;
      margin:0;
      box-sizing: border-box;
      text-decoration: none;
    }
    body{
      background-color:rgb(44, 62, 80);
    }

    a,span,button{
      transition-duration:.3s;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Nunito:400,700|Saira:400,700&subset=latin-ext');
`;