import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import api from '../../services/api';
import {login} from '../../services/auth';

import {Container, Form} from "./styles";

const Index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async e => {
        e.preventDefault();

        if (!email || !password) {
            setError('Preencha e-mail e senha para continuar');
        } else {
            try {
                const response = await api.post('/login', {email, password});
                login(response.data.token);
                this.props.history.push('/app');
            } catch (err) {
                setError('Houve um problema com o login, verifique suas credenciais.');
            }
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                {error && <p>{error}</p>}

                <input type="email"
                       placeholder="Endereço de e-mail"
                       onChange={e => setEmail(e.target.value)}
                />

                <input type="password"
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

export default withRouter(Index)