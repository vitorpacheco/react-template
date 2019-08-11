import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Layout} from 'antd';

import GlobalStyles from './styles/global';
import Loading from './components/Loading';
import PrivateRoute from './components/PrivateRoute';
import AppMenu from './components/AppMenu';
import AppHeader from './components/AppHeader';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Home = lazy(() => import('./pages/Home'));
const Error404 = lazy(() => import('./pages/404'));

const {Content, Footer} = Layout;
const browserHistory = createBrowserHistory();

const Routes = () => (
  <BrowserRouter history={browserHistory}>
    <AppMenu/>
    <Layout>
      <AppHeader />
      <Content style={{margin: '0 16px'}}>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/home" component={Home}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </Suspense>
      </Content>
      <Footer style={{textAlign: 'center'}}>© 2019</Footer>
    </Layout>
    <GlobalStyles/>
  </BrowserRouter>
);

export default Routes
