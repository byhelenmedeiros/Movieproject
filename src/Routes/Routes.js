import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/create-account" component={SignUpPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
