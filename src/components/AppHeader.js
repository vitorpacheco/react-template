import React, {useContext} from 'react';
import {Layout, Icon, Menu} from 'antd';
import {INITIAL_STATE} from '../store/reducers/FontReducer';
import {FontContext} from '../App';

const {Header} = Layout;

const AppHeader = () => {
  const dispatchLayoutFont = useContext(FontContext);

  return (
    <Header style={{background: '#fff', padding: 0}}>
      <Menu mode="horizontal" theme="dark" selectable={false}>
        <Menu.Item onClick={() => dispatchLayoutFont({type: 'increase'})}>
          <span>+A</span>
        </Menu.Item>
        <Menu.Item onClick={() => dispatchLayoutFont({type: 'decrease'})}>
          <span>-A</span>
        </Menu.Item>
        <Menu.Item onClick={() => dispatchLayoutFont({type: 'reset', payload: INITIAL_STATE})} selectable="false">
          <span>A</span>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
