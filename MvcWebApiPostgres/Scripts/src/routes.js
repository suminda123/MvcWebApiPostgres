﻿"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="create-account" handler={require('./components/account/createAccount')} />
    <NotFoundRoute handler={require('./components/NotFoundPage')} />
  </Route>
);

module.exports = routes;
