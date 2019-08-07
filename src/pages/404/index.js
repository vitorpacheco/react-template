import React from 'react';
import {Button, Result} from 'antd';

const Error404 = (props) => {
  const handleClick = () => props.history.push('/home');
  return (
    <Result
      status="404"
      title="404"
      subTitle="Desculpe, a página que você está procurando não existe."
      extra={<Button type="primary" onClick={handleClick}>Página inicial</Button>}
    />
  )
};

export default Error404;
