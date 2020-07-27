import React, { Component, Suspense, lazy } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import Nav from "./../Navigation/Nav";
import { Colors } from "../../utils/Colors.theme";
import NavigationProvider from "./../../contexts/navigation_context/navigation.provider";
import Footer from "../../Components/Footer component/Footer.component";
import Spinner from "../../Components/Spinner component/Spinner.component";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const StatutePage = lazy(() => import("../../pages/StatutePage/StatutePage"));
const PlansPage = lazy(() => import("../../pages/PlansPage/PlansPage"));
const RankingPage = lazy(() => import("../../pages/RankingPage/RankingPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LogInPage"));
const SignPage = lazy(() => import("../../pages/SignInPage/SignInPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFound"));

const Main = styled.main`
    width: 100%;
`;

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <NavigationProvider>
                    <Nav />
                </NavigationProvider>
                <Main>
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route path="/" exact component={MainPage} />
                            <Route path="/regulamin" component={StatutePage} />
                            <Route path="/plany" component={PlansPage} />
                            <Route path="/ranking" component={RankingPage} />
                            <Route path="/logowanie" component={LoginPage} />
                            <Route path="/rejestracja" component={SignPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </Suspense>
                </Main>
                <Footer />
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
      padding-top:80px;
    }

    a,span,button{
      transition-duration:.3s;
    }
`;
