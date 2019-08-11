import React from 'react';
import {Layout} from 'antd';

import AppMenu from './components/AppMenu';

import './App.css';
import Routes from './routes';
import GlobalStyles from './styles/global'

const {Header, Content, Footer} = Layout;

const App = () => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <AppMenu />
      <Layout>
        <Header style={{background: '#fff', padding: 0}}/>
        <Content style={{margin: '0 16px'}}>
          <Routes/>
        </Content>
        <Footer style={{textAlign: 'center'}}>© 2019</Footer>
      </Layout>
      <GlobalStyles/>
    </Layout>
  )
};

export default App
