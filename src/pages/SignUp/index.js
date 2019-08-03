import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Container, Form} from './styles';
import api from '../../services/api';

class SignUp extends Component {
    state = {
        username: '',
        job: '',
        password: '',
        error: ''
    };

    handleSignUp = async e => {
        e.preventDefault();

        const {username, job, password} = this.state;

        if (!username || !job || !password) {
            this.setState({error: 'Preencha todos os dados para se cadastrar.'})
        } else {
            try {
                await api.post('/users', {name: username, job: job});
                this.props.history.push('/');
            } catch (err) {
                console.log(err);
                this.setState({error: 'Ocorreu um erro ao registrar sua conta.'})
            }
        }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    {this.state.error && <p>{this.state.error}</p>}

                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={e => this.setState({username: e.target.value})}/>

                    <input
                        type="text"
                        placeholder="Ocupação"
                        onChange={e => this.setState({job: e.target.value})}/>

                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({password: e.target.value})}/>
                    <button type="submit">Cadastrar</button>
                    <hr/>
                    <Link to="/">Fazer Login</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignUp)