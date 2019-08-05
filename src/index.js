import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConfigProvider} from 'antd';
import ptBR from 'antd/es/locale/pt_BR';

import './index.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={ptBR}>
      <App/>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
