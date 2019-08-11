import React from 'react';
import {Avatar} from 'antd';

export const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    sorter: false,
    render: avatar => (<Avatar src={avatar}/>)
  },
  {
    title: 'First Name',
    dataIndex: 'first_name',
    sorter: false,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    sorter: false,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    sorter: false,
  }
];

export default columns;
