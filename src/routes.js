import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Loading from './components/Loading';
import PrivateRoute from './components/PrivateRoute';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Home = lazy(() => import('./pages/Home'));
const Error404 = lazy(() => import('./pages/404'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <PrivateRoute path="/home" component={Home}/>
        <Route path="*" component={Error404}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes
