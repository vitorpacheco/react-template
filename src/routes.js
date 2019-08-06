import React, {lazy, Suspense} from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Spin} from 'antd';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

const PrivateRoute = ({component: Component, ...rest}) => {
  const isAuthenticated = useSelector(store => store.authReducer.isAuthenticated);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ?
          (<Component {...props} />) :
          (<Redirect to={{pathname: '/', state: {from: props.location}}}/>)}
    />
  )
};

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Spin size="large" />}>
      <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <PrivateRoute path="/app" component={() => <h1>App</h1>}/>
        <Route path="*" component={() => <h1>404</h1>}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes
