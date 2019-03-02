import React, { Component } from 'react';
import Nav from './Nav.jsx';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import StatutePage from '../pages/SatutePage';
import PlansPage from '../pages/PlansPage';
import LedderPage from '../pages/LedderPage';
import LogInPage from '../pages/LogInPage';
import SignInPage from '../pages/SignInPage';
import NotFound from '../pages/NotFound';

import '../Styles/resetCSS/reset.css';
class App extends Component {
  render() {
    return (
      <>
        <Nav />
        <main>
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route path='/regulamin' component={StatutePage} />
            <Route path='/plany' component={PlansPage} />
            <Route path='/drabinka' component={LedderPage} />
            <Route path='/logowanie' component={LogInPage} />
            <Route path='/rejestracja' component={SignInPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
