import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import api from '../../services/api';

import {Container, Form} from './styles';

const Index = () => {
    const [username, setUsername] = useState('');
    const [job, setJob] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async e => {
        e.preventDefault();

        if (!username || !job || !password) {
            setError('Preencha todos os dados para se cadastrar.');
        } else {
            try {
                await api.post('/users', {name: username, job: job});
                this.props.history.push('/');
            } catch (err) {
                setError('Ocorreu um erro ao registrar sua conta.');
            }
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                {error && <p>{error}</p>}

                <input
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={e => setUsername(e.target.value)}/>

                <input
                    type="text"
                    placeholder="Ocupação"
                    onChange={e => setJob(e.target.value)}/>

                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Cadastrar</button>
                <hr/>
                <Link to="/">Fazer Login</Link>
            </Form>
        </Container>
    );
};

export default withRouter(Index)