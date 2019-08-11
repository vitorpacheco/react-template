import React, {useReducer} from 'react';
import {Layout} from 'antd';

import './App.css';
import Routes from './routes';

import FontReducer, {init, INITIAL_STATE} from './store/reducers/FontReducer';

export const FontContext = React.createContext(null);

const App = () => {
  const [layoutFont, dispatchLayoutFont] = useReducer(FontReducer, INITIAL_STATE, init);

  return (
    <FontContext.Provider value={dispatchLayoutFont}>
      <Layout className={layoutFont.layoutClassName} style={{minHeight: '100vh'}}>
        <Routes/>
      </Layout>
    </FontContext.Provider>
  )
};

export default App;
