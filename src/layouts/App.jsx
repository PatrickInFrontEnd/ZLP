import React, { Component, Suspense, lazy } from "react";
import Nav from "./Nav.jsx";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import { Colors } from "../Components/Colors";

const MainPage = lazy(() => import("../pages/MainPage"));
const StatutePage = lazy(() => import("../pages/StatutePage"));
const PlansPage = lazy(() => import("../pages/PlansPage"));
const LadderPage = lazy(() => import("../pages/LadderPage"));
const LoginPage = lazy(() => import("../pages/LogInPage"));
const SignPage = lazy(() => import("../pages/SignInPage"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

const Main = styled.main`
    width: 100%;
`;

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Nav />
                <Main>
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Switch>
                            <Route path="/" exact component={MainPage} />
                            <Route path="/regulamin" component={StatutePage} />
                            <Route path="/plany" component={PlansPage} />
                            <Route path="/drabinka" component={LadderPage} />
                            <Route path="/logowanie" component={LoginPage} />
                            <Route path="/rejestracja" component={SignPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Suspense>
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
      background-color:${Colors.bgColor};
      font-family:'Montserrat','Nunito','Arial','Sans-Serif';
    }

    a,span,button{
      transition-duration:.3s;
    }
`;
