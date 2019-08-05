import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import {Container, Form} from './styles';
import {SignInAction} from '../../store/actions/authActions';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Preencha e-mail e senha para continuar');
      return;
    }

    dispatch(SignInAction(email, password)).then(() => {
      props.history.push('/app');
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        {error && <p>{error}</p>}

        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Entrar</button>

        <hr/>

        <Link to="/signup">Cadastrar</Link>
      </Form>
    </Container>
  );
};

export default withRouter(SignIn);
