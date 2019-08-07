import React, {useState} from 'react';
import {Icon, Layout, Menu} from 'antd';

const {Sider} = Layout;

const AppMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = collapsed => setCollapsed(collapsed);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="home"/>
          <span>Página inicial</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="logout"/>
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AppMenu;
