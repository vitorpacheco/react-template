import React, {useState} from 'react';
import {Icon, Layout, Menu} from 'antd';
import {withRouter} from 'react-router-dom';
import {isAuthenticated} from '../services/auth';

const {Sider} = Layout;

const AppMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => setCollapsed(collapsed);

  return (
    <Sider hidden={!isAuthenticated()} collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" onClick={() => props.history.push('/home')}>
          <Icon type="home"/>
          <span>Página inicial</span>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => props.history.push('/logout')}>
          <Icon type="logout"/>
          <span>Sair</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(AppMenu);
