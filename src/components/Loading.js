import React from 'react';
import {Spin} from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loading = () => {
  return (
    <Container>
      <Spin size="large"/>
    </Container>
  );
};

export default Loading;
