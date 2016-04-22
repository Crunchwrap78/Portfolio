import React from 'react';
import ReactRouter from 'react-router';
import { Router } from 'react-router';
import { Route } from 'react-router';
import { IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';

var routes =(
  <Router history={hashHistory}>
    <Route path='/' component={Main} >
      <IndexRoute component={Home} />
    <Route path='About' component={About} />
    <Route path='Portfolio' component={Projects} />
    </Route>
  </Router>
);

module.exports = routes;
