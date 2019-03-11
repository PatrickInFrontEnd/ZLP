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
import styled from "styled-components";
import "../Styles/resetCSS/reset.css";

const Main = styled.main`
  background-color: "black";
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
