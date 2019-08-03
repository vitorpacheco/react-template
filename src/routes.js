import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {isAuthenticated} from './services/auth';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ?
                (<Component {...props} />) :
                (<Redirect to={{pathname: '/', state: {from: props.location}}}/>)}
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/app" component={() => <h1>App</h1>}/>
            <Route path="*" component={() => <h1>404</h1>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes
