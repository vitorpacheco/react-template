import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {SignUpAction} from '../../store/actions/authActions';

import {Container, Form} from './styles';

const Index = (props) => {
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');

  const error = useSelector(store => store.authReducer.error);

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();

    // if (!email || !job || !password) {
    //   setError('Preencha todos os dados para se cadastrar.');
    // }

    dispatch(SignUpAction(email, job, password)).then(() => {
      props.history.push('/app');
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        {error && <p>{error}</p>}

        <input
          type="text"
          placeholder="Nome de usuário"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Ocupação"
          onChange={e => setJob(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>

        <hr/>

        <Link to="/">Fazer Login</Link>
      </Form>
    </Container>
  );
};

export default withRouter(Index)
