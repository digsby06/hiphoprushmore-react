// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import EmceePage from './components/EmceePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="emcee/:id" component={EmceePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
