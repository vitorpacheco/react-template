import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Button, Card, Form, Icon, Input, message} from 'antd';

import {SignInAction} from '../../store/actions/AuthActions';
import {Container} from './styles';

const SignIn = (props) => {
  const error = useSelector(store => store.authReducer.error);

  const dispatch = useDispatch();

  const {getFieldDecorator} = props.form;

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    props.form.validateFields((error, values) => {
      if (!error) {
        dispatch(SignInAction(values.email, values.password)).then(() => {
          props.history.push('/home');
        });
      }
    });
  };

  return (
    <Container>
      <Card style={{width: 400}}>
        <Form onSubmit={handleSignIn}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [{required: true, message: 'Preencha o e-mail'}]
            })(
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}}/>}
                type="email"
                placeholder="E-mail"
              />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Preencha a senha'}]
            })(
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0, 0, 0, .25)'}}/>}
                type="password"
                placeholder="Senha"
              />
            )}
          </Form.Item>

          <Form.Item>
            <Button block type="primary" size="large" htmlType="submit">Entrar</Button>

            <Link to="/signup">Cadastrar</Link>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
};

export default withRouter(Form.create({name: 'SignInForm'})(SignIn));
