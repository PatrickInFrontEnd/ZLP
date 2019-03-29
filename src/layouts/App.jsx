import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Nav.jsx";
import MainPage from "../pages/MainPage";
import BlogPage from "../pages/BlogPage";
import StatutePage from "../pages/StatutePage";
import PlansPage from "../pages/PlansPage";
import LedderPage from "../pages/LedderPage";
import LogInPage from "../pages/LogInPage";
import SignInPage from "../pages/SignInPage";
import NotFound from "../pages/NotFound";
import styled, { createGlobalStyle } from "styled-components";
import BannerSection from "../Components/Patrykcomp/BannerSection";
import jump from "jump.js-cancelable";

const Main = styled.main`
  width:100%;
`;

class App extends Component {
  handleJump = () => {
    jump(".target", {
      duration: 500
    });
  };
  render() {
    return (
      <>
        <GlobalStyle />
        <Nav />
        <Route
          path="/"
          exact
          component={BannerSection}
          handleJump={this.handleJump}
        />
        <Main>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/regulamin" component={StatutePage} />
            <Route path="/blog" component={BlogPage} />
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
      background-color:#000;
      font-family:'Montserrat','Nunito','Arial','Sans-Serif';
    }

    a,span,button{
      transition-duration:.3s;
    }

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700|Nunito:400,700|Saira:400,700&subset=latin-ext');
`;
